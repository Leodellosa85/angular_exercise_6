import { TestBed } from '@angular/core/testing';

import { MyToasterLibraryService } from './my-toaster-library.service';

describe('MyToasterLibraryService', () => {
  let service: MyToasterLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyToasterLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
