import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServicesService } from './services/services.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { HomeComponent } from './component/home/home.component';
import { LibroComponent } from './component/libro/libro.component';
import { FormComponent } from './component/form/form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    ContactoComponent,
    HomeComponent,
    LibroComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
