import { Component, HostBinding } from '@angular/core';
import { Loader } from '../loader.class';

@Component({
  selector: 'dag-pulsing-loader',
  templateUrl: './pulsing-loader.component.html',
   styleUrls: ['./pulsing-loader.component.scss']
})
export class PulsingLoaderComponent extends Loader {
   @HostBinding('class.full-screen') fullScreen: boolean;
}
