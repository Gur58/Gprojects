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
import {HttpClientModule} from "@angular/common/http";
import  {ContactComponent} from "./contact/contact.component";

const appRoutes: Routes = [
    {path:'', component: MainComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'contact', component: ContactComponent}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),CommonModule, HttpClientModule ],
    declarations: [ AppComponent ,MainComponent,  HeaderComponent, FooterComponent, ProjectsComponent, ContactComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }