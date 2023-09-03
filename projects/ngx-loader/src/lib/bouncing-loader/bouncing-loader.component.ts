import { Component, HostBinding } from '@angular/core';
import { Loader } from '../loader.class';

@Component({
  selector: 'dag-bouncing-loader',
  templateUrl: './bouncing-loader.component.html',
   styleUrls: ['./bouncing-loader.component.scss']
})
export class BouncingLoaderComponent extends Loader {
   @HostBinding('class.full-screen') public fullScreen: boolean;
}
