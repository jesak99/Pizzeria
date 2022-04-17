import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
];


@Component({
  selector: 'app-big-cart',
  templateUrl: './big-cart.component.html',
  styleUrls: ['./big-cart.component.css']
})
export class BigCartComponent implements OnInit {
  displayedColumns: string[] = ['producto', 'descripcion', 'cantidad', 'precio', 'borrar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
