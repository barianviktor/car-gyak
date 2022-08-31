import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDesign } from '../models/design.interface';

@Injectable({
  providedIn: 'root',
})
export class DesignService {
  designs = new Subject<IDesign[]>();
  constructor(private http: HttpClient) {
    this.getDesigns();
  }
  getDesigns() {
    //return this.http.get<IDesign[]>(environment.api + 'designs');
    this.http
      .get<IDesign[]>(environment.api + 'designs')
      .subscribe((designs) => {
        this.designs.next(designs);
      });
  }
  addDesign(design: IDesign) {
    this.http.post(environment.api + 'designs', design).subscribe((x) => {
      this.getDesigns();
    });
  }
}
