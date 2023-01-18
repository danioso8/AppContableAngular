import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from 'src/app/interfaces/facturas/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  
  private api ='https://jsonplaceholder.typicode.com/comments';
  private api2 ='http://127.0.0.1:8000/editarProductos';
  private api3 ='http://localhost:3000';
 

  constructor(private http: HttpClient) {

   }


  getAllFacturas (): Observable<Factura[]>{


    return this.http.get<Factura[]>(`${this.api3}/facturas`);

  }
}
