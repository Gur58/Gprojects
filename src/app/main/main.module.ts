import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MainComponent }   from './main.component';
import { HeaderComponent } from '../header/header.component';
import {FooterComponent} from "../footer/footer.component";
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from "../projects/projects.component";

const appRoutes: Routes = [
   {path:'', component: MainComponent},
   {path:'projects', component: ProjectsComponent},
   //{path:'about', component: AboutComponent}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ MainComponent,  HeaderComponent, FooterComponent, ProjectsComponent],
    bootstrap:    [ MainComponent ]
})
export class MainModule { }