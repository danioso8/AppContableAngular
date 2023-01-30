
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AutenticatorService {
  private iniciar:boolean=false;

  private api = 'http://localhost:3000/login/singin'

  constructor(
    private http: HttpClient,
    private jwtHerlper: JwtHelperService
    ) {

   }

  singin(user:any){
     console.log("segundo conl log",user)
     return this.http.post(this.api, user)
  }

  isAuth():boolean{
    const token = localStorage.getItem('Token');

    if (this.jwtHerlper.isTokenExpired(token) || !token) {

       return false;
    }else{

      return true;

    }


  }
}

