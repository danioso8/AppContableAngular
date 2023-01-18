import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appcompueasys';
  iniciar:boolean=false;

  public iniciarSesionBarraNav(){
     this.iniciar =true;
  }
}



