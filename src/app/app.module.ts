import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { IfViewportSizeDirective } from './directives/if-viewport-size.directive';
import { VIEWPORT_CONFIG, viewportConfig } from './viewport.config';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    IfViewportSizeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: VIEWPORT_CONFIG, useValue: viewportConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
