import { RUTAS } from './avanzadas/rutas/app.routes';
import { RouterModule } from '@angular/router';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { NgForm, FormsModule } from '@angular/forms';
import { NavbarComponent } from './avanzadas/navbar/navbar.component';
import { RouteMedicoComponent } from './avanzadas/route-medico/route-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouteMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
