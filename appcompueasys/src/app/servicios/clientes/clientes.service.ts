import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/interfaces/client/client';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private api ='https://jsonplaceholder.typicode.com/comments';
  private api2 ='http://127.0.0.1:8000/editarProductos';
  private api3 ='http://localhost:3000/clientes';


  constructor(private http: HttpClient) { }


  getAllProducts (): Observable<Client[]>{

    return this.http.get<Client[]>(this.api3);

  }
}

