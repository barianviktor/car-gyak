import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IColor } from 'src/app/models/color.interface';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-details',
  templateUrl: './color-details.component.html',
  styleUrls: ['./color-details.component.scss'],
})
export class ColorDetailsComponent implements OnInit {
  loading: boolean = true;
  constructor(private colorService: ColorService, private fb: FormBuilder) {
    this.colorForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      color: [null, [Validators.required]],
    });
  }
  colors?: IColor[];
  colorForm: FormGroup;
  ngOnInit(): void {
    this.getColors();
  }

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
      this.colorService.addColor(color).subscribe((x) => {
        console.log(x);
        this.getColors();
      });
    } else {
      this.colorForm.markAllAsTouched();
    }
  }
  getColors() {
    this.loading = true;
    this.colorService.getColors().subscribe((colors) => {
      this.colors = colors;
      this.loading = false;
    });
  }
}
