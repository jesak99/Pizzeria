import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ingrediente } from 'src/app/model/ingrediente.model';
import { Producto } from 'src/app/model/producto.model';
import { IngredienteService } from 'src/app/service/ingrediente.service';
import { ProductoService } from 'src/app/service/producto.service';

interface Especialidad {
  value: string;
  viewValue: string;
}

interface Ingredientes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
  form!: FormGroup;
  codigo: string="";
  editMode = false;

  ingredientesList: Ingrediente[]=[];

  especialidades: Especialidad[] = [
    {value: '2 a 4 ings', viewValue: '2 a 4 ingredientes'},
    {value: '5 a 9 ings', viewValue: '5 a 9 ingredientes'}
  ];
  
  selectedEspecialidad = this.especialidades[0].value;
  selectedIngredientes = '';

  constructor(public dialogRef: MatDialogRef<PizzaFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Producto,
    private productoService: ProductoService, 
    private ingredienteService: IngredienteService) { }

  ngOnInit(): void {
    this.ingredientesList = this.ingredienteService.getIngredientes();
    this.ingredienteService.listChangedEvent.subscribe((listOfIngredientes: Ingrediente[])=>{
      this.ingredientesList = this.ingredienteService.getIngredientes();
    });

    let codigo = '';
    let nombre = '';
    let descripcion = '';
    let especificacion = '';
    let costo = '';
    let imagen = '';
    let categoria = '';

    if(this.data!=null){
      this.editMode = true;
      codigo = this.data.codigo;
      nombre = this.data.nombre;
      descripcion = this.data.descripcion;
      especificacion = this.data.especificacion;
      costo = this.data.costo.toString();
      imagen = this.data.imagen;
      categoria = this.data.categoria;
    }

    this.form = new FormGroup({
      nombre: new FormControl(nombre, [Validators.required]),
      descripcion: new FormControl(descripcion, [Validators.required]),
      ingredientes: new FormControl(especificacion, [Validators.required]),
      precio: new FormControl(costo, [Validators.required]),
      foto: new FormControl(imagen, [Validators.required])
    });
  }

  onSubmit(){
    const codigo = "P"+(this.productoService.getProductos().length+1);
    const nombre = this.form.value.nombre;
    const descripcion = this.form.value.descripcion;
    const especificacion = this.form.value.ingredientes.toString();
    const costo = this.form.value.precio;
    const imagen = this.form.value.foto;
    if(this.editMode){
      const pizza: Producto = new Producto(this.data.codigo, nombre, descripcion, especificacion, costo, imagen, "Pizzas", 0, 0);
      this.productoService.updateProducto(this.data.codigo, pizza);
    }else{
      const pizza: Producto = new Producto(codigo, nombre, descripcion, especificacion, costo, imagen, "Pizzas", 0, 0);
      console.log(pizza);
      this.productoService.addProducto(pizza);
    } 
  }

}
