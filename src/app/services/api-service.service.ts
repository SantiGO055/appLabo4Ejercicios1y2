import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  pruebaApi(ciudad: string): Observable<any>{
    return this.http.get('https://api.weatherapi.com/v1/current.json?key=047ef20fed80469e84b21252212503&q='+ ciudad);
  }
}
