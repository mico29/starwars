import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { StarWarsComponent } from './modules/components/star-wars/star-wars.component';
import { StarWarsAppModule } from "./modules/star-warsapp.module";
import { TableModule } from 'primeng/table';
import { PrimengCustomModule } from './primeng-custom.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        StarWarsAppModule
    ]
})
export class AppModule { }
