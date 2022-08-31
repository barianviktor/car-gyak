import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { IMaker } from 'src/app/models/maker.interface';
import { MakerService } from 'src/app/services/maker.service';

@Component({
  selector: 'app-maker-details-form',
  templateUrl: './maker-details-form.component.html',
  styleUrls: ['./maker-details-form.component.scss'],
})
export class MakerDetailsFormComponent {
  constructor(private makerService: MakerService, private fb: FormBuilder) {
    this.makerForm = fb.group({
      title: ['', Validators.required],
      iconPath: ['', Validators.required],
    });
  }
  get title(): FormControl {
    return this.makerForm.get('title') as FormControl;
  }

  get iconPath(): FormControl {
    return this.makerForm.get('iconPath') as FormControl;
  }
  makerForm: FormGroup;
  onAddMaker() {
    if (this.makerForm.valid) {
      const maker: IMaker = this.makerForm.value as IMaker;
      this.makerService.addMaker(maker);
    } else {
      this.makerForm.markAllAsTouched();
    }
  }
}
