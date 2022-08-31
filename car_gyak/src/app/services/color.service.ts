import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IColor } from '../models/color.interface';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colors = new Subject<IColor[]>();
  constructor(private http: HttpClient) {
    this.getColors();
  }

  getColors() {
    this.http.get<IColor[]>(environment.api + 'colors').subscribe((colors) => {
      this.colors.next(colors);
    });
  }

  addColor(color: IColor) {
    this.http.post(environment.api + 'colors', color).subscribe((x) => {
      this.getColors();
    });
  }
}
