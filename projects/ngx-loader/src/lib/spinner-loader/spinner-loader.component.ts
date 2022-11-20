import { Component, HostBinding, OnInit } from '@angular/core';
import { LoaderComponent } from '../loader.component';

@Component({
  selector: 'dag-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.scss']
})
export class SpinnerLoaderComponent extends LoaderComponent {
    @HostBinding('class.full-screen') fullScreen: boolean;
}
