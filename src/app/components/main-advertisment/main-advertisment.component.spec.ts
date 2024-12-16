import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdvertismentComponent } from './main-advertisment.component';

describe('MainAdvertismentComponent', () => {
  let component: MainAdvertismentComponent;
  let fixture: ComponentFixture<MainAdvertismentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAdvertismentComponent]
    });
    fixture = TestBed.createComponent(MainAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
