import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Producto } from '../model/producto.model';
import { Tamanio } from '../model/tamanio.model';
import { ProductoService } from '../service/producto.service';
import { TamanioService } from '../service/tamanio.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  form!: FormGroup;
  listOfTamanios: Tamanio[]=[];
  codigo!: string;
  pizza!: Producto;
  total?: number;

  constructor(
    private tamanioService: TamanioService, 
    private productoService: ProductoService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listOfTamanios = this.tamanioService.getTamanios();
    this.tamanioService.listChangedEvent.subscribe((listOfTamanios: Tamanio[])=>{
      this.listOfTamanios = this.tamanioService.getTamanios();
    });

    this.route.params.subscribe((params: Params)=>{
      if(params['codigo']){
        this.codigo=params['codigo'];
        this.pizza = this.productoService.getProducto(this.codigo);
      }
    });
  }

  calculo(){
    var cantidad = (document.getElementById("quantity") as HTMLInputElement).value;
    var tamanio = (document.querySelector('input[name="tamanio"]:checked') as HTMLInputElement).value;
    console.log(cantidad);
    console.log(parseFloat(tamanio));
    console.log(this.pizza.costo);
    this.total = (this.pizza.costo+parseFloat(tamanio))*parseFloat(cantidad);
  }

}
