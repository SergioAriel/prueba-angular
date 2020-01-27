import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      correo: ["", [Validators.required]]
    })
  }
  registrarse() {
    console.log(this.myForm.value)
  }
  ngOnInit() { }
}
