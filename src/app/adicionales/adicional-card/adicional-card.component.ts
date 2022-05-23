import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-adicional-card',
  templateUrl: './adicional-card.component.html',
  styleUrls: ['./adicional-card.component.css']
})
export class AdicionalCardComponent implements OnInit {
  @Input() producto!: Producto;
  @Input() index: number=0;
  @Output() evento = new EventEmitter();

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
  }

  actualizarProducto(){
    var cantidad = (document.getElementById("quantity") as HTMLInputElement).value;
    this.productoService.updateCantidad(this.producto.codigo, parseInt(cantidad));
    this.evento.emit(this.productoService);
    console.log(this.productoService.getProducto(this.producto.codigo));
  }

}
