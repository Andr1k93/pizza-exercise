import { Component, Output, ViewChild, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { Pizza } from '../pizza';
@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent {

  arrayIngredienti:string[] =[]
  pizzaName!:string;
  pizzaObject:Pizza={
    nome:'',
    ingredienti:[]
  }
  ingredients!:string[];
  @Output() sendPizza = new EventEmitter<Pizza[]>();
  @ViewChild('nomePizza') inputPizza!:ElementRef;
  @ViewChild('ingrediente1') checkIngrediente1!:ElementRef;
  @ViewChild('ingrediente2') checkIngrediente2!:ElementRef;
  @ViewChild('ingrediente3') checkIngrediente3!:ElementRef;
  @ViewChild('ingrediente4') checkIngrediente4!:ElementRef;
  @ViewChild('ingrediente5') checkIngrediente5!:ElementRef;
  @ViewChild('ingrediente6') checkIngrediente6!:ElementRef;
  @ViewChild('ingrediente7') checkIngrediente7!:ElementRef;
  pizze:Pizza[]= []
  emitPizza(){
    this.pizzaName = this.inputPizza.nativeElement.value
    this.pushIngredienti();
    this.pizzaObject.nome = this.pizzaName
    this.pizzaObject.ingredienti = this.arrayIngredienti
    this.pizze.push(this.pizzaObject)
    this.sendPizza.emit(this.pizze)
  }

  pushIngredienti(){
    if(this.checkIngrediente1.nativeElement.checked){
      this.arrayIngredienti.push(this.checkIngrediente1.nativeElement.defaultValue)
      // console.log(this.arrayIngredienti)
    }  if(this.checkIngrediente2.nativeElement.checked){
      this.arrayIngredienti.push(this.checkIngrediente2.nativeElement.defaultValue)
      console.log(this.checkIngrediente2.nativeElement.defaultValue)
    }
      if(this.checkIngrediente3.nativeElement.checked){
        this.arrayIngredienti.push(this.checkIngrediente3.nativeElement.defaultValue)
    }if(this.checkIngrediente4.nativeElement.checked){
      this.arrayIngredienti.push(this.checkIngrediente4.nativeElement.defaultValue)
  } if(this.checkIngrediente5.nativeElement.checked){
    this.arrayIngredienti.push(this.checkIngrediente5.nativeElement.defaultValue)
} if(this.checkIngrediente6.nativeElement.checked){
  this.arrayIngredienti.push(this.checkIngrediente6.nativeElement.defaultValue)
} if(this.checkIngrediente7.nativeElement.checked){
  this.arrayIngredienti.push(this.checkIngrediente7.nativeElement.defaultValue)
}
}
}