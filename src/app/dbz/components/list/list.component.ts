import { Component } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public characterList: Character[]=[{
    name: 'Fintech',
    power: 5600
  }];
}
