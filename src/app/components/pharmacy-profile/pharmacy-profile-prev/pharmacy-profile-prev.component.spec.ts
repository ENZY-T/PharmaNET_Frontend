import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyProfilePrevComponent } from './pharmacy-profile-prev.component';

describe('PharmacyProfilePrevComponent', () => {
  let component: PharmacyProfilePrevComponent;
  let fixture: ComponentFixture<PharmacyProfilePrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyProfilePrevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyProfilePrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
