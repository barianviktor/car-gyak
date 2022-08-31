import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManufacturer } from '../models/manufacturer.interface';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  constructor(private http: HttpClient) {}

  getManufacturers() {
    return this.http.get<IManufacturer[]>(environment.api + 'manufacturers');
  }

  addManufacturer(manufacturer: IManufacturer) {
    return this.http.post(environment.api + 'manufacturers', manufacturer);
  }
}
