import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxLoaderModule } from 'ngx-loader';

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
