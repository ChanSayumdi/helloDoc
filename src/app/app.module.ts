import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {UserService} from './user.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
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





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    Register2Component,
    Register3Component,
    SearchpComponent,
    ApplistComponent,
    MessageComponent,
    HomeComponent,
    CalenderComponent,
    PatientprofileComponent,
    BasicinfoComponent,
    CurrentstateComponent,
    LabComponent,
    PrescriptionComponent,
  
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
