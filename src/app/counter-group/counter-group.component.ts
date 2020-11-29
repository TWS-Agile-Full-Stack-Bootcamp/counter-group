import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/Counter';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor() { }

  public counters: Array<Counter>

  public get sum(): number {
    return this.counters.reduce((pre, current) =>{
      return pre + current.acount;
    }, 0);
  }

  ngOnInit(): void {
    this.counters = new Array<Counter>();
    this.counters.push(new Counter());
    this.counters.push(new Counter());
    this.counters.push(new Counter());
    this.counters.push(new Counter());
  }

}
