import { InjectionToken } from '@angular/core';

export interface IViewportConfig {
  medium: number;
  large: number;
}

export const VIEWPORT_CONFIG = new InjectionToken('app.core.viewport');
export const viewportConfig: IViewportConfig = {
  medium: 960,
  large: 1280
}
