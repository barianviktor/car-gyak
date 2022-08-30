import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IDesign } from 'src/app/models/design.interface';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-design-details',
  templateUrl: './design-details.component.html',
  styleUrls: ['./design-details.component.scss'],
})
export class DesignDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder, private designService: DesignService) {
    this.designForm = fb.group({
      design: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  get design(): FormControl {
    return this.designForm.get('design') as FormControl;
  }
  designForm: FormGroup;
  designs?: IDesign[];
  loading = false;
  ngOnInit(): void {
    this.getDesigns();
  }
  onAddDesign() {
    if (this.designForm.valid) {
      const design: IDesign = {
        title: this.design.value,
      };
      this.designService.addDesign(design).subscribe((x) => {
        this.getDesigns();
      });
    } else {
      this.designForm.markAllAsTouched();
    }
  }
  getDesigns() {
    this.loading = true;
    this.designService.getDesigns().subscribe((designs) => {
      this.designs = designs;
      this.loading = false;
      console.log(this.designs);
    });
  }
}
