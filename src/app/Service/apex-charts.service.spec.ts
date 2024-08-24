import { TestBed } from '@angular/core/testing';

import { ApexChartsService } from './apex-charts.service';

describe('ApexChartsService', () => {
  let service: ApexChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApexChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
