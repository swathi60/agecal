import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router'; // Import RouterModule for RouterLink and RouterLinkActive

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MainbodyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([]),// Include RouterModule in imports for RouterLink and RouterLinkActive
    ],
  providers: [],
  bootstrap: [AppComponent],

 
})
export class AppModule {}
