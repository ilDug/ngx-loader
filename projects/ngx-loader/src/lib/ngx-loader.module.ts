import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoaderDirective } from './ngx-loader.directive';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { BouncingLoaderComponent } from './bouncing-loader/bouncing-loader.component';
import { PulsingLoaderComponent } from './pulsing-loader/pulsing-loader.component';



@NgModule({
  declarations: [
    NgxLoaderDirective,
    SpinnerLoaderComponent,
    BouncingLoaderComponent,
    PulsingLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxLoaderDirective,
    SpinnerLoaderComponent,
    BouncingLoaderComponent,
    PulsingLoaderComponent
  ]
})
export class NgxLoaderModule { }
