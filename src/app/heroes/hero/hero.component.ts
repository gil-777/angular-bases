import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name:string ='IronMan';
public age:number =45;


public cambiarNombre(nombre:string):void {
this.name=nombre;
}
public cambiarEdad(edad:number):void {
  this.age=edad;
}
get capitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string{
return `${this.name} - ${this.age}`;
}
resetForm(){
  this.name='IronMan';
  this.age=45;
}
}
