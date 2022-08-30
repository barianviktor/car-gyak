import { IColor } from './color.interface';
import { IDesign } from './design.interface';
import { IMaker } from './maker.interface';
import { Motor } from './motor.enum';
import { Transmission } from './transmission.enum';

export interface ICar {
  id?: string;
  maker: IMaker;
  model: string;
  design: IDesign;
  title: string;
  description: string;
  avaiableColors: IColor[];
  madeIn: number;
  cardImage: string;
  motor: Motor;
  transmission: Transmission;
  seats: number;
  images: string[];
  price: number;
}
