import { TestBed } from '@angular/core/testing';

import { ScreenService } from './screen.service';
import { VIEWPORT_CONFIG } from '../viewport.config';

describe('ScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: VIEWPORT_CONFIG, useValue: {}
      }
    ]
  }));

  it('should be created', () => {
    const service: ScreenService = TestBed.get(ScreenService);
    expect(service).toBeTruthy();
  });
});
