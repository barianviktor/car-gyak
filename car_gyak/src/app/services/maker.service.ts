import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMaker } from '../models/maker.interface';

@Injectable({
  providedIn: 'root',
})
export class MakerService {
  makers = new Subject<IMaker[]>();
  constructor(private http: HttpClient) {
    this.getMakers();
  }

  getMakers() {
    this.http.get<IMaker[]>(environment.api + 'makers').subscribe((makers) => {
      this.makers.next(makers);
    });
  }

  addMaker(maker: IMaker) {
    this.http.post(environment.api + 'makers', maker).subscribe((x) => {
      this.getMakers();
    });
  }
}
