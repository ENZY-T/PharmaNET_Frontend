import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPromotionsComponent } from './all-promotions.component';

describe('AllPromotionsComponent', () => {
  let component: AllPromotionsComponent;
  let fixture: ComponentFixture<AllPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPromotionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
