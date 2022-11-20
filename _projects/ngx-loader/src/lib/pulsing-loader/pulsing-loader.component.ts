import { Component, HostBinding, OnInit } from '@angular/core';
import { LoaderComponent } from '../loader.component';

@Component({
  selector: 'dag-pulsing-loader',
  templateUrl: './pulsing-loader.component.html',
  styleUrls: ['./pulsing-loader.component.scss']
})
export class PulsingLoaderComponent extends LoaderComponent {
    @HostBinding('class.full-screen') fullScreen: boolean;
}
