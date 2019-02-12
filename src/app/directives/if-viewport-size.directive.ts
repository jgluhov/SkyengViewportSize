import { Directive, OnInit, TemplateRef, Input, ViewContainerRef } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective implements OnInit {
  @Input('ifViewportSize') visibleSize: string;
  private isRendered = false;
  constructor(
    private screenService: ScreenService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.screenService.screenSizeChanges()
      .subscribe(this.handleScreenSizeChange.bind(this));
  }

  handleScreenSizeChange(screenSize: string) {
    if (this.visibleSize === screenSize && !this.isRendered) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.isRendered = true;
    } else if (this.visibleSize !== screenSize && this.isRendered) {
      this.viewContainer.clear();
      this.isRendered = false;
    }
  }
}
