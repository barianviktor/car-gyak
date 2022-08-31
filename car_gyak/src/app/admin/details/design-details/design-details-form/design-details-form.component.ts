import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { IDesign } from 'src/app/models/design.interface';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-design-details-form',
  templateUrl: './design-details-form.component.html',
  styleUrls: ['./design-details-form.component.scss'],
})
export class DesignDetailsFormComponent {
  constructor(private fb: FormBuilder, private designService: DesignService) {
    this.designForm = fb.group({
      design: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  get design(): FormControl {
    return this.designForm.get('design') as FormControl;
  }
  designForm: FormGroup;

  onAddDesign() {
    if (this.designForm.valid) {
      const design: IDesign = {
        title: this.design.value,
      };
      this.designService.addDesign(design);
    } else {
      this.designForm.markAllAsTouched();
    }
  }
}
