import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaufacturerDetailsComponent } from './maufacturer-details.component';

describe('MaufacturerDetailsComponent', () => {
  let component: MaufacturerDetailsComponent;
  let fixture: ComponentFixture<MaufacturerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaufacturerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaufacturerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
