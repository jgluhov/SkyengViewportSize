import { IfViewportSizeDirective } from './if-viewport-size.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { ScreenSizeEnum } from '../screen-size.enum';

@Component({
  template: `
    <div class="container">
      <div *IfViewportSizeDirective></div>
    </div>`
})
class TestViewportSizeComponent {
}

describe('IfViewportSizeDirective', () => {
  let component: TestViewportSizeComponent;
  let fixture: ComponentFixture<TestViewportSizeComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestViewportSizeComponent,
        IfViewportSizeDirective
      ]
    });
    fixture = TestBed.createComponent(TestViewportSizeComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement;
  });

  it('should create a component with directive', () => {
    expect(component).toBeTruthy();
  });
});
