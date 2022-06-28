import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Orden } from './model/orden.model';
import { OrdenProcesoComponent } from './orden-proceso/orden-proceso.component';
import { OrdenService } from './service/orden.service';
import { ProductoService } from './service/producto.service';
import { SessionService } from './service/session.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pizzeria';
  estado!: boolean;
  listOrdenes: Orden[]=[];
  tipo ="cliente";

  constructor(
    public orden: MatDialog, 
    private productoService: ProductoService, 
    private ordenService: OrdenService,
    private sessionService: SessionService, 
    private userService: UserService,
    private router: Router){}

  ngOnInit(): void {
    this.estado = this.productoService.getOrden();
    this.listOrdenes = this.ordenService.getOrdenes();
    this.productoService.estadoOrden.subscribe(orden => {
      this.estado = orden;
    });
    this.ordenService.listChangedEvent.subscribe(listOrdenes => {
      this.listOrdenes = this.ordenService.getOrdenes();
    });
    this.sessionService.sessionChangedEvent.subscribe(session => {
      this.tipo = this.userService.getTipoUser();
    })
  }

  openOrden(orden: Orden){
    const dialogRef = this.orden.open(OrdenProcesoComponent,{
      data:orden
    });
  }
}
