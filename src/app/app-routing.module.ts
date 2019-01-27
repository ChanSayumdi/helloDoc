import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { SearchpComponent } from './searchp/searchp.component';
import { ApplistComponent } from './applist/applist.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { CalenderComponent } from './calender/calender.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { CurrentstateComponent } from './currentstate/currentstate.component';
import { LabComponent } from './lab/lab.component';
import { PrescriptionComponent } from './prescription/prescription.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user',component:UserhomeComponent},
  {path:'register2', component:Register2Component},
  {path:'register3', component:Register3Component},
  {path:'searchp', component:SearchpComponent},
  {path:'applist', component:ApplistComponent},
  {path:'message', component:MessageComponent},
  {path:'home', component:HomeComponent}, 
  {path:'calender', component:CalenderComponent}, 
  {path:'patientprofile', component:PatientprofileComponent}, 
  {path:'basicinfo', component:BasicinfoComponent}, 
  {path:'currentstate', component:CurrentstateComponent}, 
  {path:'lab', component:LabComponent}, 
  {path:'prescription', component:PrescriptionComponent}, 

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }