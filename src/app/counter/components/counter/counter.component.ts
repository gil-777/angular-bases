import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>contador es {{counter}}</h3>
<button (click)="increaseBy(2)">+1</button>
<button (click)="decreaseBy(-2)">-1</button>
<button (click)="resetCounter()">reset 10</button>


  `
})

export class CounterComponent {
  public counter:number =11;

  increaseBy(value:number):void{
    this.counter+=value;
    }

    decreaseBy(value:number):void{
      this.counter-=1;
        }
      resetCounter(){
        this.counter=10;
      }
}


