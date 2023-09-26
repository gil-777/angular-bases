import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor(private dbzService: DbzService){}

  get character():Character[]{
    return [...this.dbzService.characters];
  }

  onRemoveCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onPushCharacter(charater: Character):void{
    this.dbzService.addCharacter(charater);
  }
}
