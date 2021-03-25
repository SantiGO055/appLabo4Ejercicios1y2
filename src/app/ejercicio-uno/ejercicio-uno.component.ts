import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css']
})
export class EjercicioUnoComponent implements OnInit {
  ocultar: boolean = true;
  title = 'Ejercicio1';
  edad1:number = 0;
  edad2:number = 0;
  resultadoSuma:number= 0;
  resultadoPromedio:number= 0;
  ocultarEjercicio1 = true;

  usuarioTexto:String = "";
  ocultarBoton = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  MostrarEjercicio1(){
    this.ocultar = !this.ocultar;
  }
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

}
