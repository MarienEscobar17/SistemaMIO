import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SistemaMioService {
 
  url='http://localhost:8081/Angular/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  alta(articulo) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));    
  }

  baja(cedula:number) {
    return this.http.get(`${this.url}baja.php?cedula='${cedula}'`);
  }
  
  seleccionar(cedula:number) {
    return this.http.get(`${this.url}seleccionar.php?cedula='${cedula}'`);
  }

  modificacion(articulo) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  } 
}
