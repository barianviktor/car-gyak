import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDetailsFormComponent } from './design-details-form.component';

describe('DesignDetailsFormComponent', () => {
  let component: DesignDetailsFormComponent;
  let fixture: ComponentFixture<DesignDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
