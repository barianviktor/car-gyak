import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IColor } from '../models/color.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private http: HttpClient) {}

  getColors() {
    return this.http.get<IColor[]>(environment.api + 'colors');
  }

  addColor(color: IColor) {
    return this.http.post(environment.api + 'colors', color);
  }
}
