import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  ocultar:boolean = false;
  dataSource?:Producto[]=[];

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = this.productoService.getCarrito();
    this.productoService.listChangedEvent.subscribe((listOfProductos: Producto[])=>{
      this.dataSource = this.productoService.getCarrito();
    });
    if(this.dataSource.length==0){
      this.router.navigate(["/nuestras-pizzas"]);
    }
  }

}
