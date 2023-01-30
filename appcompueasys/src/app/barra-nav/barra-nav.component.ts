import { AutenticatorService } from '../auth/services/login/autenticator.service';
import { style } from '@angular/animations';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { FormBuilder, FormGroup, NgModel, RequiredValidator, Validators } from '@angular/forms';
import { Router, RouterModule, RouterLink, RouterLinkActive, ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.scss']
})
export class BarraNavComponent implements OnInit {
  name!:string;
  tittle:string;
  product:Boolean;
  client:boolean;
  factura:boolean;
  empleados:boolean;
  configuracion:boolean;
  inventario:boolean;



  constructor(
    private router: Router, 
    private readonly routerActiv: ActivatedRoute, 
    private Renderer2: Renderer2,
    private auth: AutenticatorService 
       
    ) 
    {
    this.tittle="CompuEasys"
    this.product=false;
    this.client=false;
    this.factura=false;
    this.empleados=false;
    this.configuracion= false;
    this.inventario=false;


   }

  ngOnInit(): void {
   this.routerActiv.queryParams.subscribe((params:Params)=>{
    this.name = params['name'];
   })
    
  }


 showbarra = true;

 CerrarSeion(){
  localStorage.removeItem('Token')
  this.router.navigate(['/login'])
 };

 

 openClient(){

  this.product=false;
  this.client=true;
  this.factura=false;
  this.empleados=false;
  this.configuracion= false;
  this.inventario=false;
  

 }
 openProduct(){
  this.product=true;
  this.client=false;
  this.factura=false;
  this.empleados=false;
  this.configuracion= false;
  this.inventario=false;
  
 }
 openFactura(){
  this.product=false;
  this.client=false;
  this.factura=true;
  this.empleados=false;
  this.configuracion= false;
  this.inventario=false;
  
 }

 openEmpleados(){
  this.product=false;
  this.client=false;
  this.factura=false;
  this.empleados=true;
  this.configuracion= false;
  this.inventario=false;
 }

 openConfiguracion(){
  this.product=false;
  this.client=false;
  this.factura=false;
  this.empleados=false;
  this.configuracion=true;
  this.inventario=false;
 }

 openInventario(){
  this.product=false;
  this.client=false;
  this.factura=false;
  this.empleados=false;
  this.configuracion=false;
  this.inventario=true;
 }


 

}
