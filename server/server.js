var user = ""; //ingresar aqui el usuario de mail con el que se quiere realizar la prueba, por ejemplo "solis.sergioariel"
var dominio = ""; //ingresar aqui el dominio por ejemplo "gmail.com"
var password = ""; //ingresar aqui la contraseña

var http = require("http");
var url = require("url");
var querystring = require("querystring");
var nodemailer = require("nodemailer");

var servidor = http.createServer(function(pedido, respuesta) {
  var objetourl = url.parse(pedido.url);
  var camino = objetourl.pathname;
  if (camino == "/static/enviarMail") {
    enviarMail(pedido, respuesta);
  }
});

servidor.listen(3000);

function enviarMail(pedido, respuesta) {
  var info = "";
  pedido.on("data", function(datosparciales) {
    info += datosparciales;
  });
  pedido.on("end", function() {
    var formulario = querystring.parse(info);
    var smtpTransport = nodemailer.createTransport(
      "smtps://" +
        user +
        "%40" +
        dominio +
        ":" +
        password +
        "@smtp." +
        dominio +
        ""
    );
    smtpTransport.sendMail(
      {
        from: user + " <" + user + "@" + dominio + ">",
        to: user + " <" + user + "@" + dominio + ">",
        subject: "Mail enviado desde la pagina Trabajo Final",
        text:
          " Nombre: " +
          formulario["nombre"] +
          formulario["apellido"] +
          "\n Mail: " +
          formulario["mail"]
      },
      function(error, response) {
        if (error) {
          console.log(error);
        } else {
          respuesta.writeHead(200, {
            "Content-Type": "text/html"
          });
          var pagina =
            "<!doctype html><html><head></head><body>" +
            "Se mando el mensale: " +
            formulario["mensaje"] +
            "<br>Con el asunto: " +
            formulario["asunto"] +
            "</body></html>";
          respuesta.end(pagina);
        }
      }
    );
  });
}

console.log("Servidor web iniciado");
