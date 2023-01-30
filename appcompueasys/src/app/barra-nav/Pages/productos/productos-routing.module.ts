import { ProductosComponent } from 'src/app/barra-nav/Pages/productos/productos/productos.component';
import { EditarComponent } from './editar/editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path: 'productos', component: ProductosComponent},
      {path: 'crear', component: CrearComponent},
      {path: 'editar', component: EditarComponent},
      {path: '**', redirectTo: 'productos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
