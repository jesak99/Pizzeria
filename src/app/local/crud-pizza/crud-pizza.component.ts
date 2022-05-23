import { Component, OnInit, Injectable, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { Producto } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-crud-pizza',
  templateUrl: './crud-pizza.component.html',
  styleUrls: ['./crud-pizza.component.css']
})

@Injectable()
export class CrudPizzaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'imagen', 'nombre', 'descripcion', 'especificacion', 'costo', 'acciones'];
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public pizzas: MatDialog, public productoService: ProductoService) {
    
    const dataPizzas = this.productoService.getPizzas();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(dataPizzas);
     
   }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.productoService.getPizzas());
    this.productoService.listChangedEvent.subscribe((listoOfPromociones: Producto[])=>{
      this.dataSource = new MatTableDataSource(this.productoService.getPizzas());
    });
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openPizzas(){
    const dialogRef = this.pizzas.open(PizzaFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openEditPizzas(pizza:Producto){
    const dialogRef = this.pizzas.open(PizzaFormComponent, {
      data: {
        codigo: pizza.codigo,
        nombre: pizza.nombre, 
        descripcion: pizza.descripcion, 
        especificacion: pizza.especificacion,
        costo: pizza.costo, 
        imagen: pizza.imagen,
        categoria: pizza.categoria
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
