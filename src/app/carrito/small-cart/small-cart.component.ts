import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.css']
})
export class SmallCartComponent implements OnInit {
  panelOpenState = false;
  listOfProductos : Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listOfProductos = this.productoService.getCarrito();
    this.productoService.listChangedEvent.subscribe((listOfPizzas: Producto[])=>{
      this.listOfProductos = this.productoService.getCarrito();
    });
  }

}
