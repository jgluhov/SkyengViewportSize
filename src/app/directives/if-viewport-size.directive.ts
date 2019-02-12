import { Directive, Inject } from '@angular/core';
import { VIEWPORT_CONFIG } from '../viewport.config';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective {

  constructor(@Inject(VIEWPORT_CONFIG) appConfig) {
    console.log(appConfig);
  }

}
