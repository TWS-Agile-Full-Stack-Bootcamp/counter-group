import { Component } from '@angular/core';
import {Counter} from './models/Counter'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-counter';

  public counter: Counter;
  /**
   *
   */
  constructor() {    
    this.counter = new Counter();
  }
}
