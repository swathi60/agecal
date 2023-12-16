import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.css'
})
export class MainbodyComponent {

  @Input() receivedAge:number=0;
  
}
