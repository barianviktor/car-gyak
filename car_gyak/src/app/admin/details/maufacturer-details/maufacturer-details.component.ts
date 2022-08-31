import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IManufacturer } from 'src/app/models/manufacturer.interface';
import { ManufacturerService } from 'src/app/services/manufacturer.service';

@Component({
  selector: 'app-maufacturer-details',
  templateUrl: './maufacturer-details.component.html',
  styleUrls: ['./maufacturer-details.component.scss'],
})
export class MaufacturerDetailsComponent implements OnInit {
  constructor(
    private manufacturerService: ManufacturerService,
    private fb: FormBuilder
  ) {
    this.manufacturerForm = fb.group({
      title: ['', Validators.required],
      iconPath: ['', Validators.required],
    });
  }
  get title(): FormControl {
    return this.manufacturerForm.get('title') as FormControl;
  }

  get iconPath(): FormControl {
    return this.manufacturerForm.get('iconPath') as FormControl;
  }
  manufacturerForm: FormGroup;
  loading = false;
  manufacturers?: IManufacturer[];
  ngOnInit(): void {
    this.onGetManufacturers();
  }
  onGetManufacturers() {
    this.loading = true;
    this.manufacturerService.getManufacturers().subscribe((manufacturers) => {
      setTimeout(() => {
        this.loading = false;
        this.manufacturers = manufacturers;
      }, 2000);
    });
  }
  onAddManufacturer() {
    if (this.manufacturerForm.valid) {
      console.log(this.manufacturerForm.valid);
      const manufacturer: IManufacturer = this.manufacturerForm
        .value as IManufacturer;
      console.log(manufacturer);
      this.manufacturerService.addManufacturer(manufacturer).subscribe((x) => {
        console.log(x);
        this.onGetManufacturers();
        this.manufacturerForm.reset();
      });
    } else {
      this.manufacturerForm.markAllAsTouched();
    }
  }
}
