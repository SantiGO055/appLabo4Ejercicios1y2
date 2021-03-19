import { Component, Input } from '@angular/core';

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
  
  CalcularSuma(){
    
    this.resultadoSuma = this.edad1 + this.edad2;
  }
  CalcularPromedio(){
    
    this.resultadoPromedio = (this.edad1 + this.edad2) / 2;
  }
  MostrarResultado(){
    this.ocultar = true;
  }
  LimpiarTexto(){
    this.resultadoPromedio = 0;
    this.resultadoSuma = 0;
    this.edad1 = 0;
    this.edad2 = 0;
    
  }
}