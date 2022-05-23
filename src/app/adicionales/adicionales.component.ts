import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.component.html',
  styleUrls: ['./adicionales.component.css']
})
export class AdicionalesComponent implements OnInit {
  listOfBebidas : Producto[] = [];
  listOfEntradas : Producto[] = [];
  listOfPostres : Producto[] = [];
  listOfOtros : Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listOfBebidas = this.productoService.getBebidas();
    this.productoService.listChangedEvent.subscribe((listOfBebidas: Producto[])=>{
      this.listOfBebidas = this.productoService.getBebidas();
    });

    this.listOfEntradas = this.productoService.getEntradas();
    this.productoService.listChangedEvent.subscribe((listOfEntradas: Producto[])=>{
      this.listOfEntradas = this.productoService.getEntradas();
    });

    this.listOfPostres = this.productoService.getPostres();
    this.productoService.listChangedEvent.subscribe((listOfPostres: Producto[])=>{
      this.listOfPostres = this.productoService.getPostres();
    });

    this.listOfOtros = this.productoService.getOtros();
    this.productoService.listChangedEvent.subscribe((listOfOtros: Producto[])=>{
      this.listOfOtros = this.productoService.getOtros();
    });
  }

}
