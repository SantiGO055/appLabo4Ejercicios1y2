import { Component, Input } from '@angular/core';
import { Usuario } from './usuarios.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio1';
  constructor(){}
  edad1:number = 0;
  edad2:number = 0;
  resultadoSuma:number= 0;
  resultadoPromedio:number= 0;
  ocultar = true;
  ocultarEjercicio1 = true;
  usuario = new Usuario("miUsuario","pepito123");
  usuarioTexto:String = "";
  ocultarBoton = true;

  CalcularSuma(){
    
    this.resultadoSuma = this.edad1 + this.edad2;
  }
  CalcularPromedio(){
    
    this.resultadoPromedio = (this.edad1 + this.edad2) / 2;
  }
  MostrarResultado(){
    this.ocultar = !this.ocultar;
  }
  LimpiarTexto(){
    this.resultadoPromedio = 0;
    this.resultadoSuma = 0;
    this.edad1 = 0;
    this.edad2 = 0;
    
  }
  MostrarEjercicio1(){
    if(this.ocultarEjercicio1 == true){
      this.ocultarEjercicio1 = false;
    }
  }
  ngOnInit() {
  }
  AlternarOcultarMostrar(){
    if(this.ocultarBoton){
      this.ocultarBoton = true;
    }
  }
}