import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDesign } from '../models/design.interface';

@Injectable({
  providedIn: 'root',
})
export class DesignService {
  constructor(private http: HttpClient) {}
  getDesigns() {
    return this.http.get<IDesign[]>(environment.api + 'designs');
  }
  addDesign(design: IDesign) {
    return this.http.post(environment.api + 'designs', design);
  }
}
