import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  id:string|undefined;
  @Output()
  public onDeletedId: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList: Character[]=[{
    name: 'Fintech',
    power: 5600
  }];



  onDeleteCharacter(index?: string):void{
    //TODO: Emitir el id del personaje
    this.id=index;
    console.log("el indice seleccionado es: ",index);
    if(index !== undefined){
      this.onDeletedId.emit(this.id);
    }
    else return;

  }
}
