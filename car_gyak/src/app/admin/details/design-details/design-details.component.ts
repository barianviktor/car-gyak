import { Component, OnInit } from '@angular/core';
import { IDesign } from 'src/app/models/design.interface';
import { DesignService } from 'src/app/services/design.service';

@Component({
  selector: 'app-design-details',
  templateUrl: './design-details.component.html',
  styleUrls: ['./design-details.component.scss'],
})
export class DesignDetailsComponent implements OnInit {
  constructor(private designService: DesignService) {}

  ngOnInit(): void {
    this.getDesigns();
  }
  designs?: IDesign[];
  loading = false;

  getDesigns() {
    this.loading = true;
    this.designService.designs.subscribe((designs) => {
      this.loading = false;
      this.designs = designs;
      console.log(designs);
    });
  }
  /*   onAddDesign() {
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
  } */
}
