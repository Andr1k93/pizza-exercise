import { Component } from '@angular/core';
import { Pizza } from './pizza';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza';
  pizza:Pizza[]= [{
    nome:'',
    ingredienti:[]
  }]

  receivePizza(pizze:Pizza[]){
    this.pizza = pizze
    this.pizza= pizze
  }
}
