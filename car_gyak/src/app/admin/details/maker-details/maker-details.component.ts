import { Component, OnInit } from '@angular/core';
import { IMaker } from 'src/app/models/maker.interface';
import { MakerService } from 'src/app/services/maker.service';

@Component({
  selector: 'app-maker-details',
  templateUrl: './maker-details.component.html',
  styleUrls: ['./maker-details.component.scss'],
})
export class MakerDetailsComponent implements OnInit {
  loading = false;
  makers?: IMaker[];
  constructor(private makerService: MakerService) {}
  ngOnInit(): void {
    this.onGetMakers();
  }
  onGetMakers() {
    this.loading = true;
    this.makerService.makers.subscribe((makers) => {
      this.makers = makers;
      this.loading = false;
    });
  }
}
