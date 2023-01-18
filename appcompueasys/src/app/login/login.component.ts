import { AutenticatorService } from './../servicios/login/autenticator.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, RequiredValidator, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { Login } from '../interfaces/login/login';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:Login[];
  public myForm!: FormGroup;


  constructor(private fb:FormBuilder, private autenticator: AutenticatorService) {
    this.login=[];
    img:'/appcompueasys/src/assets/Imagenes/CompuEasys.png'
  }

  ngOnInit(): void {
   this.myForm = this.createMyForm();

  }

  createMyForm():FormGroup{
    return this.fb.group({
      usuario:['danioso8@hotmail.com',[Validators.required] ],
      password:['Miesposa1', [Validators.required] ],
     });

  }

  public submitFormulario():void{
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAllAsTouched();

        return alert('jjj')

      });


    }else{
      var token = this.autenticator.singin(this.myForm.value)
      console.log(token);

    }

  }
public get f():any{
    return this.myForm.controls;
  }

enviarDatos():void{


}
openDialog(){

  }




}
