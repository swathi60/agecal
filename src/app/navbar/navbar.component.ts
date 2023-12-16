import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MainbodyComponent } from '../mainbody/mainbody.component';
import { AboutComponent } from '../about/about.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HomeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

 

}
