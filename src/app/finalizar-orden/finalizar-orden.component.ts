import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colonia } from '../model/colonia.model';
import { Direccion } from '../model/direccion.model';
import { Orden } from '../model/orden.model';
import { Producto } from '../model/producto.model';
import { ColoniaService } from '../service/colonia.service';
import { OrdenService } from '../service/orden.service';
import { ProductoService } from '../service/producto.service';
//this.recibe, this.telefonoUsr, this.colonia, this.calle, this.referencias, this.numExt, this.numInt, this.cp
@Component({
  selector: 'app-finalizar-orden',
  templateUrl: './finalizar-orden.component.html',
  styleUrls: ['./finalizar-orden.component.css']
})
export class FinalizarOrdenComponent implements OnInit {
  formDireccion!: FormGroup;
  formEfectivo!: FormGroup;
  selectColonia: boolean= false;
  listOfColonias: Colonia[]=[];
  cp: string="";
  direccion!: Direccion;
  efectivoTotal!: number;
  efectivoIngresado!: number;

  constructor(
    private _formBuilder: FormBuilder, 
    private productoService: ProductoService,
    private coloniaService: ColoniaService,
    private ordenService: OrdenService,
    private router: Router) { }

  ngOnInit(): void {
    this.listOfColonias = this.coloniaService.getColonias();
    this.coloniaService.listChangedEvent.subscribe((listOfColonias: Colonia[])=>{
      this.listOfColonias = this.coloniaService.getColonias();
    });
    this.efectivoTotal = this.productoService.total();
    this.productoService.listChangedEvent.subscribe((listOfCarrito: Producto[])=>{
      this.efectivoTotal = this.productoService.total();
    });

    let recibe = '';
    let telefono = '';
    let colonia = '';
    let calle = '';
    let referencias = '';
    let numInt = '';
    let numExt = '';
    let cp = '';
    let efectivo='';
    this.formDireccion = this._formBuilder.group({
      recibe: new FormControl(recibe, [Validators.required]),
      telefonoUsr: new FormControl(telefono, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      colonia: new FormControl(colonia, [Validators.required]),
      calle: new FormControl(calle, [Validators.required]),
      referencias: new FormControl(referencias, [Validators.required]),
      numInt: new FormControl(numInt),
      numExt: new FormControl(numExt, [Validators.required]),
      cp: new FormControl(cp, [Validators.required, Validators.pattern('^[0-9]{5}$')])
    });
    this.formEfectivo = this._formBuilder.group({
      efectivo: new FormControl(efectivo, [Validators.required])
    });
  }

  mostrar(){
    this.selectColonia=true;
  }

  changeEstado(){
    this.productoService.changeOrden(true);
  }

  submitDireccion(){
    const recibe = this.formDireccion.value.recibe;
    const telefono = this.formDireccion.value.telefonoUsr;
    const colonia = this.formDireccion.value.colonia;
    const cp = this.formDireccion.value.cp;
    const calle = this.formDireccion.value.calle;
    const referencias = this.formDireccion.value.referencias;
    const numExt = this.formDireccion.value.numExt;
    const numInt = this.formDireccion.value.numInt;
    this.direccion = new Direccion(recibe, telefono, this.coloniaService.getColonia(cp), calle, referencias, numExt, numInt);
    console.log(this.direccion);
  }

  onSubmit(){
    const codigo = "ORD"+(this.ordenService.getOrdenes().length+1);
    this.efectivoIngresado = this.formEfectivo.value.efectivo;

    if(this.efectivoIngresado>=this.efectivoTotal){
      const orden: Orden = new Orden(
        codigo,
        this.direccion,this.productoService.getCarrito(),
        this.productoService.total(),
        0,
        this.productoService.total()-0,
        this.efectivoIngresado,this.efectivoIngresado-this.productoService.total(), 
        new Date());
      this.ordenService.addOrden(orden);
      console.log(orden);
      this.productoService.vaciarCarrito();
      this.changeEstado();
      this.router.navigate(["/nuestras-pizzas"]);
    }else{
      this.formEfectivo.disable;
    }
  }

}
