import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'contacto', component: ContactoComponent},
  {path: "", redirectTo: "/inicio", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
