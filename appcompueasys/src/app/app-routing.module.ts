import { HomeComponent } from './Home/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {    path: '', component: HomeComponent},
  {    path: 'login', component: LoginComponent  },
  {    path: 'clientes', component: UsuariosComponent  },
  {    path: 'barraNav', component: BarraNavComponent},
  
  {    path: '**',  redirectTo:'AppComponent', pathMatch:'full'   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
