import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineCardPrevComponent } from './medicine-card-prev.component';

describe('MedicineCardPrevComponent', () => {
  let component: MedicineCardPrevComponent;
  let fixture: ComponentFixture<MedicineCardPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineCardPrevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineCardPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
