import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza';
@Component({
  selector: 'app-pizza-element',
  templateUrl: './pizza-element.component.html',
  styleUrls: ['./pizza-element.component.css']
})
export class PizzaElementComponent {
@Input() pizza:Pizza={
  nome:'',
  ingredienti:[]
}

}
