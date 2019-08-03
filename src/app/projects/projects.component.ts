import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Projects} from "./projects";

@Component({
    selector: 'my-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit{
    projects:Projects[]=[];

    constructor(private http:HttpClient){}

    ngOnInit(): void {
        this.http.get('projects.json').subscribe((data) => this.projects=data['projects']);
        for(let item of this.projects)
        {
            item.img='../../../public/img/'+item.img;
        }
    }
}