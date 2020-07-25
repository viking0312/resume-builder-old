import { TestBed } from '@angular/core/testing';

import { DataFlowService } from './data-flow.service';

describe('DataFlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFlowService = TestBed.get(DataFlowService);
    expect(service).toBeTruthy();
  });
});
