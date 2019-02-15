import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gc-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[];
  orderList: Pizza[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // gehört nicht in die Komponente, sondern in einen Service ;-)
    this.http.get<Pizza[]>('https://pizza.angular.schule/pizzas')
      .subscribe(pizzas => this.pizzas = pizzas);

    // this.pizzas = require('../pizza-data.json');
  }

  addOrder(pizza: Pizza) {
    this.orderList.push(pizza);
  }

}
