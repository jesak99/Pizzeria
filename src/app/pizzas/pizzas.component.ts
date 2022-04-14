import { Component, OnInit } from '@angular/core';

export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})

export class PizzasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
