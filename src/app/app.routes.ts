import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
{'path':'',component:HomeComponent},
{'path':'result',component:MainbodyComponent},
{'path':'about',component:AboutComponent}];
