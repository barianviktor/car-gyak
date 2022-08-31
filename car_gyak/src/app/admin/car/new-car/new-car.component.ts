import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IColor } from 'src/app/models/color.interface';
import { IDesign } from 'src/app/models/design.interface';
import { IMaker } from 'src/app/models/maker.interface';
import { Transmission } from 'src/app/models/transmission.enum';
import { Motor } from 'src/app/models/motor.enum';
import { ColorService } from 'src/app/services/color.service';
import { DesignService } from 'src/app/services/design.service';
import { MakerService } from 'src/app/services/maker.service';
@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss'],
})
export class NewCarComponent implements OnInit {
  makers: IMaker[] = [];
  colors: IColor[] = [];
  designs: IDesign[] = [];
  transmissions = Object.values(Transmission);
  motors = Object.values(Motor);
  carForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private colorService: ColorService,
    private designService: DesignService,
    private makerService: MakerService
  ) {
    this.carForm = fb.group({
      maker: [null, [Validators.required]],
      model: ['', [Validators.required]],
      design: [null, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      avaiableColors: [null, [Validators.required]],
      madeIn: [null, [Validators.required]],
      cardImage: ['', [Validators.required]],
      motor: [null, [Validators.required]],
      transmission: [null, [Validators.required]],
      seats: [null, [Validators.required]],
      images: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  getColors() {
    this.colorService.colors.subscribe((colors) => (this.colors = colors));
  }
  getDesigns() {
    this.designService.designs.subscribe((designs) => (this.designs = designs));
  }
  getMakers() {
    this.makerService.makers.subscribe((makers) => (this.makers = makers));
  }

  ngOnInit(): void {
    this.getColors();
    this.getDesigns();
    this.getMakers();
  }
  selectMaker(maker: IMaker) {
    console.log(maker);
    this.carForm.get('maker')?.patchValue(maker);
  }
  onSubmit() {
    console.log('submit', this.carForm.get('maker'));
  }
}
