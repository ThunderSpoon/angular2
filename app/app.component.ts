import { Component } from '@angular/core';


@Component({
    selector:'pm-app',
    template : '<h1>{{appTitle}}</h1>' 
})

export class AppComponent{
        appTitle:string='product management';

}
