import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/Counter';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor(private counterService: CounterService) {

  }

  public get counters(): Array<Counter> {
    return this.counterService.counters;
  }

  public get sum(): number {
    return this.counters.reduce((pre, current) => {
      return pre + current.acount;
    }, 0);
  }

  ngOnInit(): void {
  }
}
