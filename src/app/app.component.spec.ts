import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { IfViewportSizeDirective } from './directives/if-viewport-size.directive';
import { ScreenSizeEnum } from './screen-size.enum';
import { VIEWPORT_CONFIG, viewportConfig } from './viewport.config';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TestComponent,
        IfViewportSizeDirective
      ],
      providers: [
        ScreenSizeEnum,
        {
          provide: VIEWPORT_CONFIG, useValue: viewportConfig
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SkyengViewportSize'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SkyengViewportSize');
  });
});
