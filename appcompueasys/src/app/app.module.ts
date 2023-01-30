
//components
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { FacturaComponent } from './barra-nav/Pages/factura/factura.component';
import { ProductosComponent } from './barra-nav/Pages/productos/productos/productos.component';

//(rm -rf node_module) #elimiar todos los modulos si no funciona el httpClient y volver a instalar (npm i)
import { HttpClientModule } from '@angular/common/http';

//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Modulos de material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';




import { HomeComponent } from './Home/home/home.component';
import { BarPrimaryComponent } from './bar-primary/bar-primary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWT_OPTIONS } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    UsuariosComponent,
    FooterComponent,
        
    HomeComponent,
    BarPrimaryComponent,
    FacturaComponent,
    
    ConfiguracionComponent,
    InventarioComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //material
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule
   ],


  providers: [
    {provide:JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent],


})
export class AppModule {}
