import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
 // constructor() { }
  public characters: Character[]=[{
    id: uuid(),
    name: 'EfectiCard',
    power: 5000
  },{
    id: uuid(),
    name: 'SisegCard',
    power:2000
  },{
    id: uuid(),
    name: 'OTP',
    power: 100
  }];

  addCharacter(character :Character):void{
console.log('MAIN PAGE');
console.log(character);
const newCharacter: Character={id:uuid(),...character};
this.characters.push(newCharacter);
  }

 // onRemoveId(index:number):void{
 //   console.log('MAIN PAGE deleted id');
  //  console.log(index);
  //  this.characters.splice(index,1);
 //  // this.characters.
 //     }
 deleteCharacterById(id:string):void{
  this.characters = this.characters.filter(character => character.id != id);
 }
}
