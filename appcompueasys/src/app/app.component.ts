import { AutenticatorService } from './auth/services/login/autenticator.service';
import { NgModel } from '@angular/forms';


import { style } from '@angular/animations';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  title = 'appcompueasys';
  iniciar:boolean=false;

constructor(
  private router: Router, 
    private Renderer2: Renderer2,
    private auth: AutenticatorService 
){

} 

  ngOnInit(): void {
   
  }

  public iniciarSesionBarraNav(){
     this.iniciar =true;
  }

  CerrarSeion(){
    localStorage.removeItem('Token')
    this.router.navigate(['/login'])
   };
}



