import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoaderModule } from 'ngx-loader';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxLoaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
