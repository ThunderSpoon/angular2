import { Component } from '@angular/core';


@Component({
    selector:'pm-app',
    template:`<h1>{{pageTile}}</h1>
            <pm-products></pm-products>
    `
})

export class AppComponent{
        appTitle:string='product management';

}
