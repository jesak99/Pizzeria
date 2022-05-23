import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../service/producto.service';

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
  listOfPizzas : Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listOfPizzas = this.productoService.getPizzas();
    this.productoService.listChangedEvent.subscribe((listOfPizzas: Producto[])=>{
      this.listOfPizzas = this.productoService.getPizzas();
    });
  }

}
