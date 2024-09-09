import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppComponent} from './app.component';
import { ContainerComponent} from './Container/container.component';
import { HeaderComponent } from './Container/Header/header.component';


@NgModule({
    declarations : [
        AppComponent,
        ContainerComponent,
        HeaderComponent,
          ],
    imports : [
        BrowserModule,

    ],

    providers : [],
    bootstrap : [AppComponent]
})

export class AppModule { }
