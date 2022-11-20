import { NgModule } from '@angular/core';
import { LoaderDirective } from './loader.directive';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { PulsingLoaderComponent } from './pulsing-loader/pulsing-loader.component';
import { BouncingLoaderComponent } from './bouncing-loader/bouncing-loader.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        LoaderDirective,
        SpinnerLoaderComponent,
        PulsingLoaderComponent,
        BouncingLoaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LoaderDirective
    ]
})
export class NgxLoaderModule { }
