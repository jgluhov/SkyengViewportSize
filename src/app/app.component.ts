import { Component } from '@angular/core';
import { ScreenSizeEnum } from './screen-size.enum';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SkyengViewportSize';
  constructor(public screenSizeEnum: ScreenSizeEnum) {
  }

  public ngDoCheck() : void {
    if (!environment.production) {
      console.log( "ngDoCheck() :", Date.now() );
    }
  }
}
