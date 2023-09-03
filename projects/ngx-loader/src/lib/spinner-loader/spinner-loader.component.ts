import { Component, HostBinding } from '@angular/core';
import { Loader } from '../loader.class';

@Component({
  selector: 'dag-spinner-loader',
  templateUrl: './spinner-loader.component.html',
   styleUrls: ['./spinner-loader.component.scss']
})
export class SpinnerLoaderComponent extends Loader {
   @HostBinding('class.full-screen') public fullScreen: boolean;
}
