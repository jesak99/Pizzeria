import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { Orden } from '../model/orden.model';
import { Producto } from '../model/producto.model';
import { OrdenService } from '../service/orden.service';

@Component({
  selector: 'app-orden-proceso',
  templateUrl: './orden-proceso.component.html',
  styleUrls: ['./orden-proceso.component.css']
})
export class OrdenProcesoComponent implements OnInit {
  orden!: Orden;
  listOfPizzas: Producto[]=[];
  listOfBebidas: Producto[]=[];
  listOfEntradas: Producto[]=[];
  listOfPostres: Producto[]=[];
  listOfOtros: Producto[]=[];

  constructor(
    public dialogRef: MatDialogRef<AppComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Orden, 
    private ordenService: OrdenService) { }

  ngOnInit(): void {
    
    this.orden = this.data;
    for(let i=0; i<this.orden.productos.length; i++){
      if(this.orden.productos[i].categoria=="Pizzas"){
        this.listOfPizzas.push(this.orden.productos[i]);
      }
      if(this.orden.productos[i].categoria=="Bebidas"){
        this.listOfBebidas.push(this.orden.productos[i]);
      }
      if(this.orden.productos[i].categoria=="Entradas"){
        this.listOfEntradas.push(this.orden.productos[i]);
      }
      if(this.orden.productos[i].categoria=="Postres"){
        this.listOfPostres.push(this.orden.productos[i]);
      }
      if(this.orden.productos[i].categoria=="Otros"){
        this.listOfOtros.push(this.orden.productos[i]);
      }
    }
  }

}
