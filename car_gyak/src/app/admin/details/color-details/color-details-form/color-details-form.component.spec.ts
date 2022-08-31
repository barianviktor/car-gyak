import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDetailsFormComponent } from './color-details-form.component';

describe('ColorDetailsFormComponent', () => {
  let component: ColorDetailsFormComponent;
  let fixture: ComponentFixture<ColorDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
