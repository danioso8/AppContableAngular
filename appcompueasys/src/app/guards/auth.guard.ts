import { AutenticatorService } from './../servicios/login/autenticator.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import decode  from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
 constructor(private autenticar: AutenticatorService, private router:Router){

 }
 
  canActivate():boolean{
    const token = localStorage.getItem('token');
    
    if (token) {
       return true;
    }else{
      alert('Inicie sesion')
      return false;
      
    }
    
    
  }

  
    
  
     
     
    
     
}
