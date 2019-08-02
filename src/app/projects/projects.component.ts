import {Component} from '@angular/core';

@Component({
    selector: 'my-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
    projects:{}[]=[
        {
            title: 'Gprojects',
            description: 'Gprojects - отправная точка, где собрана краткая иноформация о всех проектах, ссылки на репозитории и контакты для связи с разработчиком.',
            technology: ['HTML', 'CSS', 'Angular', 'BootStrap', 'WebPack', 'NodeJS', 'NPM'],
            url: 'https://github.com/Gur58/Gprojects',
            img: 'angular.png'
        }
    ]


}