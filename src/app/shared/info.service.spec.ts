import { TestBed, inject } from '@angular/core/testing';

import { InfoHandlerService } from './info-handler.service';

describe('InfoHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoHandlerService]
    });
  });

  it('should be created', inject([InfoHandlerService], (service: InfoHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
