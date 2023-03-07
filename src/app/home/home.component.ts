import { Component } from '@angular/core';
import { skills, iskills, iprojekts, projekts } from './skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  skills: Array<iskills> = skills;
  projekts: Array<iprojekts> = projekts;
  
}
