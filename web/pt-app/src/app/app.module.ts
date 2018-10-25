import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { ActivityBoxComponent } from './activity-box/activity-box.component';
import { LogoNavBarComponent } from './logo-nav-bar/logo-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ActivityBoxComponent,
    LogoNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
