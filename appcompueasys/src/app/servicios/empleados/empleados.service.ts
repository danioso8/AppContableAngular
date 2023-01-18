import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() {
    id:Number;
    Nombre: String;
    Apellido: String;
    Correo:String;
    Telefono:Number;
    Direccion:String;
    Ciudad:String;
   }
}
