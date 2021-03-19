import { LoginComponent } from './login/login.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'BienvenidoComponent',component: BienvenidoComponent },
  { path: 'LoginComponent', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
