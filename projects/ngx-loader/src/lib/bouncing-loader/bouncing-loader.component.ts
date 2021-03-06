import { Component, HostBinding, OnInit } from '@angular/core';
import { LoaderComponent } from '../loader.component';

@Component({
  selector: 'dag-bouncing-loader',
  templateUrl: './bouncing-loader.component.html',
  styleUrls: ['./bouncing-loader.component.scss']
})
export class BouncingLoaderComponent extends LoaderComponent {
    @HostBinding('class.full-screen') fullScreen: boolean;
}
