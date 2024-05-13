import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import {HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AppComponent,
        BrowserModule,
        HttpClientModule,
        ProfileComponent,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ProfileService, HttpClient],
    // bootstrap: [AppComponent]
})
export class AppModule { }