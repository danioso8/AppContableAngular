import { HomeComponent } from './Home/home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AuthGuard } from './auth/guards/auth.guard'; 



const routes: Routes = [
  {    path: '', component: HomeComponent},
  {    path: 'home', component: HomeComponent},
  {    path: 'login', component: LoginComponent  },
  {    
    path: 'barraNav', 
    loadChildren:()=> import('./barra-nav/app-principal/app-principal.module').then(m => m.AppPrincipalModule)
  
  },
  {
   path:'productos',
   loadChildren: ()=> import('./barra-nav/Pages/productos/productos.module').then(m => m.ProductosModule)
  },
  
  {    path: 'AppContable', component: AppComponent, canActivate: [AuthGuard]},
  {    path: '**',  redirectTo:'home', pathMatch:'full'   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
