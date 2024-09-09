import { Component } from '@angular/core';
import { ContainerComponent } from './Container/container.component';


@Component({
  selector: 'app-root',
  imports : [ContainerComponent,],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css'],
 })

export class AppComponent {
  title = 'SalonPro';
}
