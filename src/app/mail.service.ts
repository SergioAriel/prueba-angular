import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  save(data) {
    return this.http.post(this.url + "/static/enviarMail", data)
  }
}
