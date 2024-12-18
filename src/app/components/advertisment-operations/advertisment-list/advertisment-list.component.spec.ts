import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentListComponent } from './advertisment-list.component';

describe('AdvertismentListComponent', () => {
  let component: AdvertismentListComponent;
  let fixture: ComponentFixture<AdvertismentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertismentListComponent]
    });
    fixture = TestBed.createComponent(AdvertismentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
