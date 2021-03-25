import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Componentes
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { BienvenidoComponent } from './../bienvenido/bienvenido.component';

const routes: Routes = [
  { path: 'BienvenidoComponent',component: BienvenidoComponent },
  { path: 'LoginComponent', component: LoginComponent},
  { path: 'RegisterComponent', component: RegisterComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
