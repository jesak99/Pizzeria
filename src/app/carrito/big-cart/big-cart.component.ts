import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Carrito } from 'src/app/model/carrito.model';
import { Producto } from 'src/app/model/producto.model';

@Component({
  selector: 'app-big-cart',
  templateUrl: './big-cart.component.html',
  styleUrls: ['./big-cart.component.css']
})
export class BigCartComponent implements OnInit {
  displayedColumns: string[] = ['producto', 'descripcion', 'cantidad', 'precio', 'borrar'];
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    /** 
    this.dataSource = new MatTableDataSource(this.carritoService.getProductos());
    this.carritoService.listChangedEvent.subscribe((listOfProductos: Producto[])=>{
      this.dataSource = new MatTableDataSource(this.carritoService.getProductos());
    });
    this.total = this.carritoService.total();*/
  }

  vaciarCarrito(){
    /**this.carritoService.vaciarCarrito();*/
    this.ngOnInit();
  }
}
