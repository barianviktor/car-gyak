import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { IColor } from 'src/app/models/color.interface';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-details-form',
  templateUrl: './color-details-form.component.html',
  styleUrls: ['./color-details-form.component.scss'],
})
export class ColorDetailsFormComponent {
  constructor(private colorService: ColorService, private fb: FormBuilder) {
    this.colorForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      color: [null, [Validators.required]],
    });
  }
  colorForm: FormGroup;

  get title(): FormControl {
    return this.colorForm.get('title') as FormControl;
  }
  get color(): FormControl {
    return this.colorForm.get('color') as FormControl;
  }
  onAddColor() {
    console.log(this.colorForm.value);
    if (this.colorForm.valid) {
      const color: IColor = {
        title: this.title.value,
        color: this.color.value,
      };
      this.colorService.addColor(color);
    } else {
      this.colorForm.markAllAsTouched();
    }
  }
}
