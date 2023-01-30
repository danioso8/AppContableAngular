import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';

import { UsuariosComponent } from 'src/app/usuarios/usuarios.component';
import { BarraNavComponent } from '../barra-nav.component';
import { ProductosComponent } from '../Pages/productos/productos/productos.component';

const routes: Routes = [

  {
    path:'',
    children:[
      { path: 'clientes', component: UsuariosComponent, canActivate: [AuthGuard] },
      {path: 'productos', component: ProductosComponent, canActivate: [AuthGuard]},
      {path: '**', redirectTo:'barraNav'}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrincipalRoutingModule { }
