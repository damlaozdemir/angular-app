import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailModalComponent } from './driver-detail-modal.component';

describe('DriverDetailModalComponent', () => {
  let component: DriverDetailModalComponent;
  let fixture: ComponentFixture<DriverDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
