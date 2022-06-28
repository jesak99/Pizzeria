import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from '../model/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductoService{
    listChangedEvent: EventEmitter<Producto[]> = new EventEmitter();
    estadoOrden: EventEmitter<boolean> = new EventEmitter();
    //codigo, nombre, descripcion, especificacion, costo, imagen, categoria
    listOfProductos: Producto[] = [
        new Producto("P1","Hawaiana","La pizza que unos cuestionan pero todos aman.","Jamón y Piña",120,"./assets/HNC.png","Pizzas", 1, 0),
        new Producto("P2","Extravaganzza","La pizza más incluyente de nuestras especialidades.","Pepperoni, Carne Molida, Jamón, Chorizo, Pimiento, Cebolla, Champiñones Frescos, Aceitunas y Extra Queso", 120,"./assets/MEX.png","Pizzas", 1, 0),
        new Producto("P3","PEPSI","","1.5 L",16,"./assets/FPEPSI.png","Bebidas", 0, 0),
        new Producto("P4","PEPSI","","600 ml",16,"./assets/FPEPSI.png","Bebidas", 0, 0),
        new Producto("P5","PEPSI LIGHT","","600 ml",16,"./assets/FPLIGHT.png","Bebidas", 0, 0),
        new Producto("P6","7 UP","","1.5 L",16,"./assets/FP7UP.png","Bebidas", 0, 0),
        new Producto("P7","7 UP","","600 ml",16,"./assets/FP7UP.png","Bebidas", 0, 0),
        new Producto("P8","MANZANITA","","1.5 L",16,"./assets/FPMANZA.png","Bebidas", 0, 0),
        new Producto("P9","MANZANITA","","600 ml",16,"./assets/FPMANZA.png","Bebidas", 0, 0),
        new Producto("P10","MIRINDA","","1.5 L",16,"./assets/FPNARAN.png","Bebidas", 0, 0),
        new Producto("P11","MIRINDA","","600 ml",16,"./assets/FPNARAN.png","Bebidas", 0, 0),
        new Producto("P12","CHEESY BREAD","","8 tiras",10,"./assets/FCHEESB.png","Entradas", 0, 0),
        new Producto("P13","CHEESY BREAD CHORIZO JALAPEÑO","","8 tiras",10,"./assets/FCHSBKJ.png","Entradas", 0, 0),
        new Producto("P14","VOLCAN","","2 piezas",10,"./assets/VOLCAN.png","Postres", 0, 0),
        new Producto("P15","CANELA BAITZ","","16 piezas",10,"./assets/CANEBITE.png","Postres", 0, 0),
        new Producto("P16","CAJETA BAITZ","","16 piezas",10,"./assets/FCAJEBIT.png","Postres", 0, 0),
        new Producto("P17","PIEZA CUP MARINARA","","56 g",10,"./assets/CUPMARIN.png","Otros", 0, 0),
        new Producto("P18","PIEZA CUP SALCIDITA","","56 g",10,"./assets/CUPSALCI.png","Otros", 0, 0)
    ];

    listOfPizzas: Producto[]=[];
    listOfBebidas: Producto[]=[];
    listOfEntradas: Producto[]=[];
    listOfPostres: Producto[]=[];
    listOfOtros: Producto[]=[];
    listOfCarrito: Producto[]=[];

    orden: boolean = false;

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
            if(this.listOfProductos[i].categoria=="Otros"){
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
    /**
     * Operaciones del carrito de compras
     */
    getCarrito(){
        return this.listOfCarrito;
    }

    agregarCarrito(producto: Producto){
        if(this.findProductoCart(producto.codigo)>=0){
            this.listOfCarrito[this.findProductoCart(producto.codigo)]=producto;
        }else{
            this.listOfCarrito.push(producto);
        }
    }

    updateProductoCart(codigo: string, Producto: Producto){
        this.listOfCarrito[this.findProducto(codigo)]=Producto;
    }

    findProductoCart(codigo: string){
        for(let i=0; i<this.listOfCarrito.length; i++){
            if(codigo==this.listOfCarrito[i].codigo)
                return i;
        }
        return -1;
    }

    deleteProductoCart(codigo: string){
        if(this.getProducto(codigo).categoria=="Pizzas"){
            this.updateCantidad(this.listOfCarrito[this.findProductoCart(codigo)].codigo,1);
            this.updateTotal(this.listOfCarrito[this.findProductoCart(codigo)].codigo,0);
            this.listOfCarrito.splice(this.findProductoCart(codigo),1);
        }else{
            this.updateCantidad(this.listOfCarrito[this.findProductoCart(codigo)].codigo,0);
            this.updateTotal(this.listOfCarrito[this.findProductoCart(codigo)].codigo,0);
            this.listOfCarrito.splice(this.findProductoCart(codigo),1);
        }   
    }

    vaciarCarrito(){
        for(let i=0; i<this.listOfCarrito.length; i++){
            this.updateCantidad(this.listOfCarrito[i].codigo,0);
            this.updateTotal(this.listOfCarrito[i].codigo,0);
        }
        this.listOfCarrito=[];
    }

    total(){
        let total: number =0;
        for(let i=0; i<this.listOfCarrito.length; i++){
            total+= this.listOfCarrito[i].total;
        }
        return total;
    }

    /**Controlador de orden */
    changeOrden(estado: boolean){
        this.orden = estado;
        this.estadoOrden.emit(estado);
    }

    getOrden(){
        return this.orden;
    }
}