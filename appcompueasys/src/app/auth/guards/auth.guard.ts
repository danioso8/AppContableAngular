import { AutenticatorService } from '../services/login/autenticator.service';
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

    if (!this.autenticar.isAuth()) {
        alert('El token no es valido o ya expiro, Porfavor Inicie Sesion');
        this.router.navigate(['login'])
       return false;
    }else{

      return true;

    }


  }








}
