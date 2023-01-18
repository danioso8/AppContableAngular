
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AutenticatorService {
  private iniciar:boolean=false;

  private api = 'http://localhost:3000'

  constructor(private http: HttpClient) {

   }

  singin(user:any){
     console.log(user)
     return this.http.post(`${this.api}/login/singin`, user)
  }


}

