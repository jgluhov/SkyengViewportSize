import { Injectable, NgZone, Inject } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { throttleTime, map, startWith } from 'rxjs/operators';
import { VIEWPORT_CONFIG, IViewportConfig } from '../viewport.config';
import { ScreenSizeEnum } from '../screen-size.enum';

interface IScreenSize {
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private screenSize$: Observable<IScreenSize>;

  constructor(
    private zone: NgZone,
    @Inject(VIEWPORT_CONFIG) private viewportConfig: IViewportConfig,
    private screenSizeEnum: ScreenSizeEnum
  ) {
    this.screenSize$ = this.getScreenSize();
  }

  private getScreenSize() {
    return this.zone.runOutsideAngular(() => {
      const resize$ = fromEvent(window, 'resize')
        .pipe(
          throttleTime(50),
          map(this.getSize),
          startWith(this.getSize())
        );

      return resize$;
    })
  }

  public screenSizeChanges(): Observable<string> {
    return this.screenSize$.pipe(
      map(({width}) => {
        if (width < this.viewportConfig.medium) {
          return this.screenSizeEnum.SMALL;
        } else if (width >= this.viewportConfig.medium && width <= this.viewportConfig.large) {
          return this.screenSizeEnum.MEDIUM;
        } else {
          return this.screenSizeEnum.LARGE;
        }
      })
    )
  }

  private getSize = (): IScreenSize => ({
    width: window.innerWidth,
    height: window.innerHeight
  })
}
