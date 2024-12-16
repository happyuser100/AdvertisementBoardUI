import { TestBed } from '@angular/core/testing';

import { AdvertisementBoardService } from './advertisement-board.service';

describe('AdvertisementBoardService', () => {
  let service: AdvertisementBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertisementBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
