import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from '../models/Counter';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    let counter = new Counter();
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.counter = counter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase count when call increase', () => {
    component.increase();
    expect(1).toBe(component.account);
  });

  it('should increase count when call increase', () => {
    component.decrease();
    expect(-1).toBe(component.account);
  });
});
