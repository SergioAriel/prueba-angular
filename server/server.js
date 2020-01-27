var user = "" //ingresar aqui el usuario de mail con el que se quiere realizar la prueba, por ejemplo "solis.sergioariel"
var dominio = "" //ingresar aqui el dominio por ejemplo "gmail.com"
var password = "" //ingresar aqui la contraseña

var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var nodemailer = require("nodemailer");

var mime = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4'
};

var servidor = http.createServer(function (pedido, respuesta) {
    var objetourl = url.parse(pedido.url);
    var camino = objetourl.pathname;
    if (camino == 'static/')
        camino = 'static/index.html';
    encaminar(pedido, respuesta, camino);
});

servidor.listen(3000);

function encaminar(pedido, respuesta, camino) {
    console.log(pedido);
    switch (camino) {
        case '/static/enviarMail': {
            console.log("estamo en el lugar correcto")
            enviarMail(pedido, respuesta);
            break;
        }
        default: {
            fs.exists(camino, function (existe) {
                if (existe) {
                    fs.readFile(camino, function (error, contenido) {
                        if (error) {
                            respuesta.writeHead(500, {
                                'Content-Type': 'text/plain'
                            });
                            respuesta.write('Error interno');
                            respuesta.end();
                        } else {
                            var vec = camino.split('.');
                            var extension = vec[vec.length - 1];
                            var mimearchivo = mime[extension];
                            respuesta.writeHead(200, {
                                'Content-Type': mimearchivo
                            });
                            respuesta.write(contenido);
                            respuesta.end();
                        }
                    });
                } else {
                    respuesta.writeHead(404, {
                        'Content-Type': 'text/html'
                    });
                    respuesta.write('<!doctype html><html><head></head><body><h1>Error 404: pagina no encontrada<h1><a href="/">Volver a la pagina principal</a></body></html>');
                    respuesta.end();
                }
            });
        }
    }
}

function enviarMail(pedido, respuesta) {
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        var smtpTransport = nodemailer.createTransport('smtps://' + user + '%40' + dominio + ':' + password + '@smtp.' + dominio + '');
        smtpTransport.sendMail({
            from: user + " <" + user + "@" + dominio + ">",
            to: user + " <" + user + "@" + dominio + ">",
            subject: formulario['asunto'],
            text: formulario['mensaje'],
        }, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                respuesta.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                var pagina = '<!doctype html><html><head></head><body>' +
                    'Se mando el mensale: ' + formulario['mensaje'] + '<br>Con el asunto: ' + formulario['asunto'] +
                    '</body></html>';
                respuesta.end(pagina);
            }
        });
    });
}

console.log('Servidor web iniciado');