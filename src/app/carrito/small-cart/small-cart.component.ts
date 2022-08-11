import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnvioComponent } from 'src/app/envio/envio.component';
import { Producto } from 'src/app/model/producto.model';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.css']
})
export class SmallCartComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  listOfProductos : Producto[] = [];

  constructor(private productoService: ProductoService, private router: Router, public envio: MatDialog) { }

  ngOnInit(): void {
    this.listOfProductos = this.productoService.getCarrito();
    this.productoService.listChangedEvent.subscribe((listOfPizzas: Producto[])=>{
      this.listOfProductos = this.productoService.getCarrito();
    });
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
    if(this.listOfProductos?.length==0){
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
