import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/Counter';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor() { }

  public counter: Counter;

  ngOnInit(): void {
    this.counter = new Counter();
  }

}
