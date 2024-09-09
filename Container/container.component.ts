import { Component  } from '@angular/core';
import { HeaderComponent } from './Header/header.component';

@Component ({
    selector    : 'app-container',
    imports     : [HeaderComponent],
    standalone  :  true,
    templateUrl : './container.component.html',
    styleUrls   :  ['./container.component.css'],
   
 })

export class ContainerComponent {
    

}