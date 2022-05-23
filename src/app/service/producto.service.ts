import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../model/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductoService{
    listChangedEvent: EventEmitter<Producto[]> = new EventEmitter();
    //codigo, nombre, descripcion, especificacion, costo, imagen, categoria
    listOfProductos: Producto[] = [
        new Producto("P1","Hawaiana","La pizza que unos cuestionan pero todos aman.","Jamón y Piña",120,"https://assets.dominos.com.mx/dev/webOptimized/especialidad/HNC/HNC.png","Pizzas", 1, 0),
        new Producto("P2","Extravaganzza","La pizza más incluyente de nuestras especialidades.","Pepperoni, Carne Molida, Jamón, Chorizo, Pimiento, Cebolla, Champiñones Frescos, Aceitunas y Extra Queso", 120,"https://assets.dominos.com.mx/dev/webOptimized/especialidad/EXV/EXV.png","Pizzas", 1, 0),
        new Producto("P3","PEPSI","","1.5 L",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FPEPSI.png","Bebidas", 0, 0),
        new Producto("P4","PEPSI","","600 ml",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FPEPSI.png","Bebidas", 0, 0),
        new Producto("P5","PEPSI LIGHT","","600 ml",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FPLIGHT.png","Bebidas", 0, 0),
        new Producto("P6","7 UP","","1.5 L",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FP7UP.png","Bebidas", 0, 0),
        new Producto("P7","7 UP","","600 ml",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FP7UP.png","Bebidas", 0, 0),
        new Producto("P8","MANZANITA","","1.5 L",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FPMANZA.png","Bebidas", 0, 0),
        new Producto("P9","MANZANITA","","600 ml",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FPMANZA.png","Bebidas", 0, 0),
        new Producto("P10","MIRINDA","","1.5 L",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FPNARAN.png","Bebidas", 0, 0),
        new Producto("P11","MIRINDA","","600 ml",16,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FPNARAN.png","Bebidas", 0, 0),
        new Producto("P12","CHEESY BREAD","","8 tiras",10,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FCHEESB.png","Entradas", 0, 0),
        new Producto("P13","CHEESY BREAD CHORIZO JALAPEÑO","","8 tiras",10,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FCHSBKJ.png","Entradas", 0, 0),
        new Producto("P14","VOLCAN","","2 piezas",10,"https://assets.dominos.com.mx/dev/webOptimized/adicional/VOLCAN.png","Postres", 0, 0),
        new Producto("P15","CANELA BAITZ","","16 piezas",10,"https://assets.dominos.com.mx/dev/webOptimized/adicional/CANEBITE.png","Postres", 0, 0),
        new Producto("P16","CAJETA BAITZ","","16 piezas",10,"https://assets.dominos.com.mx/dev/webOptimized/adicional/FCAJEBIT.png","Postres", 0, 0),
        new Producto("P17","PIEZA CUP MARINARA","","56 g",10,"https://assets.dominos.com.mx/dev/webOptimized/adicional/CUPMARIN.png","Otros", 0, 0),
        new Producto("P18","PIEZA CUP SALCIDITA","","56 g",10,"https://assets.dominos.com.mx/dev/webOptimized/adicional/CUPSALCI.png","Otros", 0, 0)
    ];

    listOfPizzas: Producto[]=[];
    listOfBebidas: Producto[]=[];
    listOfEntradas: Producto[]=[];
    listOfPostres: Producto[]=[];
    listOfOtros: Producto[]=[];
    listOfCarrito: Producto[]=[];

    //Devuelve toda la lista de productos existentes
    getProductos(){
        return this.listOfProductos;
    }
    //Devuelve una lista con productos unicamente de la categoria Pizzas
    getPizzas(){
        this.listOfPizzas = [];
        for(let i=0; i<this.listOfProductos.length; i++){
            if(this.listOfProductos[i].categoria=="Pizzas"){
                this.listOfPizzas.push(this.listOfProductos[i]);
            }
        }
        return this.listOfPizzas;
    }
    //Devuelve una lista con productos unicamente de la categoria Bebidas
    getBebidas(){
        this.listOfBebidas = [];
        for(let i=0; i<this.listOfProductos.length; i++){
            if(this.listOfProductos[i].categoria=="Bebidas"){
                this.listOfBebidas.push(this.listOfProductos[i]);
            }
        }
        return this.listOfBebidas;
    }
    //Devuelve una lista con productos unicamente de la categoria Entradas
    getEntradas(){
        this.listOfEntradas = [];
        for(let i=0; i<this.listOfProductos.length; i++){
            if(this.listOfProductos[i].categoria=="Entradas"){
                this.listOfEntradas.push(this.listOfProductos[i]);
            }
        }
        return this.listOfEntradas;
    }
    //Devuelve una lista con productos unicamente de la categoria Postres
    getPostres(){
        this.listOfPostres = [];
        for(let i=0; i<this.listOfProductos.length; i++){
            if(this.listOfProductos[i].categoria=="Postres"){
                this.listOfPostres.push(this.listOfProductos[i]);
            }
        }
        return this.listOfPostres;
    }
    //Devuelve una lista con productos unicamente de la categoria Otros
    getOtros(){
        this.listOfOtros = [];
        for(let i=0; i<this.listOfProductos.length; i++){
            if(this.listOfProductos[i].categoria=="Entradas"){
                this.listOfOtros.push(this.listOfProductos[i]);
            }
        }
        return this.listOfOtros;
    }
    //Elimina un producto de la lista de todos los productos
    deleteProducto(index: number){
        this.listOfProductos.splice(index, 1);
    }
    //Agrega un producto a la lista de todos los productos
    addProducto(Producto: Producto) {
		this.listOfProductos.push(Producto);
	}
    //Actualiza un producto de la lista de todos los productos
    updateProducto(codigo: string, Producto: Producto){
        this.listOfProductos[this.findProducto(codigo)]=Producto;
    }
    //Devuelve un producto de la lista de todos los productos
    getProducto(codigo: string){
        return this.listOfProductos[this.findProducto(codigo)];
	}
    //Devuelve la posición de un producto en la lista de todos los producto
    findProducto(codigo: string){
        for(let i=0; i<this.listOfProductos.length; i++){
            if(codigo==this.listOfProductos[i].codigo)
                return i;
        }
        return 0;
    }
    //Actualiza la cantidad de un producto de la lista de todos los productos
    updateCantidad(codigo: string, cantidad: number){
        this.getProducto(codigo).cantidad=cantidad;
    }
    
    updateTotal(codigo: string, total: number){
        for(let i=0; i<this.listOfProductos.length; i++){
            if(codigo===this.listOfProductos[i].codigo){
                this.listOfProductos[i].total=total;
            }
        }
    }
}