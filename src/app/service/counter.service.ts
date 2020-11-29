import { Injectable } from '@angular/core';
import { Counter } from '../models/Counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterStore: Array<Counter>;
  constructor() {
    this.counterStore = new Array<Counter>();
    this.counters.push(new Counter());
    this.counters.push(new Counter());
    this.counters.push(new Counter());
    this.counters.push(new Counter());
  }

  public get counters(): Array<Counter> {
    return this.counterStore;
  }

  public get Total(): number {
    return this.counterStore.reduce((pre, current) => {
      return pre + current.acount;
    }, 0);
  }
}
