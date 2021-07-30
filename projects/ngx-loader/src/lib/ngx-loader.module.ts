import { NgModule } from '@angular/core';
import { LoaderDirective } from './loader.directive';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { PulsingLoaderComponent } from './pulsing-loader/pulsing-loader.component';
import { BouncingLoaderComponent } from './bouncing-loader/bouncing-loader.component';



@NgModule({
    declarations: [
        LoaderDirective,
        SpinnerLoaderComponent,
        PulsingLoaderComponent,
        BouncingLoaderComponent
    ],
    imports: [
    ],
    exports: [
        LoaderDirective
    ]
})
export class NgxLoaderModule { }
