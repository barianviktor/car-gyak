import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerDetailsFormComponent } from './maker-details-form.component';

describe('MakerDetailsFormComponent', () => {
  let component: MakerDetailsFormComponent;
  let fixture: ComponentFixture<MakerDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakerDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
