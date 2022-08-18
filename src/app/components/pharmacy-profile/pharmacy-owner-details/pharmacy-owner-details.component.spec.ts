import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOwnerDetailsComponent } from './pharmacy-owner-details.component';

describe('PharmacyOwnerDetailsComponent', () => {
  let component: PharmacyOwnerDetailsComponent;
  let fixture: ComponentFixture<PharmacyOwnerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyOwnerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyOwnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
