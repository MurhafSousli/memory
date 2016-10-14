/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemoryService } from './memory.service';

describe('Service: Memory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemoryService]
    });
  });

  it('should ...', inject([MemoryService], (service: MemoryService) => {
    expect(service).toBeTruthy();
  }));
});
