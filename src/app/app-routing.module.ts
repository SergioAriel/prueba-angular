import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { LibroComponent } from './component/libro/libro.component'
import { FormComponent } from './component/form/form.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: FormComponent },
  { path: 'form', component: FormComponent },
  { path: 'libro/:id', component: LibroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
