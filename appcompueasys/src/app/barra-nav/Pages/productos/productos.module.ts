

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';

import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';




@NgModule({
  declarations: [
    
    CrearComponent,
    EditarComponent,
    
   
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
