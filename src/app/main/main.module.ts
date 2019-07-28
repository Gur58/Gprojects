import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MainComponent }   from './main.component';
import { HeaderComponent } from '../header/header.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ MainComponent,  HeaderComponent],
    bootstrap:    [ MainComponent ]
})
export class MainModule { }