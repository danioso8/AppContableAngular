
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

//components
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';


import { HomeComponent } from './Home/home/home.component';
import { BarPrimaryComponent } from './bar-primary/bar-primary.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacturaComponent } from './factura/factura.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { InventarioComponent } from './inventario/inventario.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    ProductosComponent,
    UsuariosComponent,
    FooterComponent,
    LoginComponent,

   
    HomeComponent,
    BarPrimaryComponent,
    DialogComponent,
    FacturaComponent,
    EmpleadosComponent,
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

   
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {}
