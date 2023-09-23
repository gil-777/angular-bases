import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  public characters: Character[]=[{
    name: 'EfectiCard',
    power: 5000
  },{
    name: 'SisegCard',
    power:2000
  },{
    name: 'OTP',
    power: 100
  }];
}
