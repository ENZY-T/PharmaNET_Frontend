import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWallpaperComponent } from './main-wallpaper.component';

describe('MainWallpaperComponent', () => {
  let component: MainWallpaperComponent;
  let fixture: ComponentFixture<MainWallpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWallpaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
