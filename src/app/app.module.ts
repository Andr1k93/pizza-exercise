import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPizzaComponent } from './add-pizza/add-pizza.component';
import { PizzaElementComponent } from './pizza-element/pizza-element.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPizzaComponent,
    PizzaElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
