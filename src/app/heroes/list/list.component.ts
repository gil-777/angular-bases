import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
public heroNames:string[]= ['Spiderman','IronMan','Hulk','Thor'];

 deleted?:string='';
removeLastHeroe():void{
  this.deleted = this.heroNames.pop();
}
}
