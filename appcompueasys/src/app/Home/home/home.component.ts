import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  registro: boolean;
  constructor() {
    this.registro = false;
   }

  ngOnInit(): void {
  }
  
  registroActivado(){
    this.registro  = true;
  }

}
