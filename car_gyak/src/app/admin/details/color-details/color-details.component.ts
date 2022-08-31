import { Component, OnInit } from '@angular/core';
import { IColor } from 'src/app/models/color.interface';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-details',
  templateUrl: './color-details.component.html',
  styleUrls: ['./color-details.component.scss'],
})
export class ColorDetailsComponent implements OnInit {
  constructor(private colorService: ColorService) {}
  loading: boolean = true;

  colors?: IColor[];
  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.loading = true;
    this.colorService.colors.subscribe((colors) => {
      this.colors = colors;
      this.loading = false;
    });
  }
}
