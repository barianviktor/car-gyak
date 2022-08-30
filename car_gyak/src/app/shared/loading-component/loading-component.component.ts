import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.scss'],
})
export class LoadingComponentComponent implements OnInit {
  @Input() width: string = '200px';
  @Input() height: string = '120px';
  constructor() {}

  ngOnInit(): void {}
}
