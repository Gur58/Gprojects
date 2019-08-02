import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MainComponent }   from './main/main.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from "./footer/footer.component";
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {AppComponent} from "./app.component";
import  {CommonModule} from "@angular/common";

const appRoutes: Routes = [
    {path:'', component: MainComponent},
    {path:'projects', component: ProjectsComponent},
    //{path:'about', component: AboutComponent}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),CommonModule ],
    declarations: [ AppComponent ,MainComponent,  HeaderComponent, FooterComponent, ProjectsComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }