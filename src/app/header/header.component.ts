import {Component} from '@angular/core';

@Component({
    selector: 'header-app',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    pageUrl={
        project: '/projects',
        main: '/',
        contact: '/contact'
    }
}