import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointComponent } from './appoint/appoint.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { TreatementComponent } from './treatement/treatement.component';


const routes: Routes = [
  {'path':'home' , component:HomeComponent} , 
  {'path':'appoint'  ,  component:AppointComponent},
  {'path':'doctor' , component:DoctorsComponent},
  {'path':'treat' , component:TreatementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
