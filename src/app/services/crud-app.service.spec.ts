import { TestBed } from '@angular/core/testing';

import { CrudAppService } from './crud-app.service';

describe('CrudAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudAppService = TestBed.get(CrudAppService);
    expect(service).toBeTruthy();
  });
});
