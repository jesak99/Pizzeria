import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EnvioComponent } from 'src/app/envio/envio.component';
import { Producto } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-big-cart',
  templateUrl: './big-cart.component.html',
  styleUrls: ['./big-cart.component.css']
})
export class BigCartComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['producto', 'descripcion', 'cantidad', 'precio', 'borrar'];
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  listAux?:Producto[]=[];
  total: number = 0;
  @Input() oculto:boolean=true;

  constructor(private productoService: ProductoService, private router: Router, public envio: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.productoService.getCarrito());
    this.listAux = this.productoService.getCarrito();
    this.productoService.listChangedEvent.subscribe((listOfProductos: Producto[])=>{
      this.dataSource = new MatTableDataSource(this.productoService.getCarrito());
      this.listAux = this.productoService.getCarrito();
    });
    this.total = this.productoService.total();
  }

  ngAfterViewInit() {
    this.ngOnInit;
  }

  actualizarProducto(codigo: string){
    var cantidad = (document.getElementById("quantity") as HTMLInputElement).value;
    this.productoService.updateCantidad(codigo, parseInt(cantidad));
    this.productoService.updateTotal(codigo, parseInt(cantidad)*this.productoService.getProducto(codigo).costo);
    this.productoService.agregarCarrito(this.productoService.getProducto(codigo));
    console.log(this.productoService.getProducto(codigo));
    this.ngOnInit();
  }

  deleteProducto(codigo: string){
    this.productoService.deleteProductoCart(codigo);
    this.ngOnInit();
    if(this.listAux?.length==0){
      this.router.navigate(["/nuestras-pizzas"]);
    }
  }

  vaciarCarrito(){
    this.productoService.vaciarCarrito();
    this.ngOnInit();
    this.router.navigate(["/nuestras-pizzas"]);
  }

  openEnvio(){
    const dialogRef = this.envio.open(EnvioComponent);
  }
}
