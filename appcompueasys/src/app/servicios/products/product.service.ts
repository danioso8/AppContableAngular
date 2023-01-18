
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/Products/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private api ='https://jsonplaceholder.typicode.com/comments';
private api2 ='http://127.0.0.1:8000/editarProductos';


  constructor(private http: HttpClient) { }


  getAllProducts (): Observable<Product[]>{

    return this.http.get<Product[]>(this.api);

  }

}
