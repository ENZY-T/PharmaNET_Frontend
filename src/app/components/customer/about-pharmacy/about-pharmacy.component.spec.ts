import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPharmacyComponent } from './about-pharmacy.component';

describe('AboutPharmacyComponent', () => {
  let component: AboutPharmacyComponent;
  let fixture: ComponentFixture<AboutPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPharmacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
