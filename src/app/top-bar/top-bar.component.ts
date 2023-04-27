import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor() {}

  @Output() notify = new EventEmitter<any>();

  ngOnInit() {}
}
