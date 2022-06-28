import { EventEmitter, Injectable } from '@angular/core';
import { Colonia } from '../model/colonia.model';
import { Direccion } from '../model/direccion.model';
import { Orden } from '../model/orden.model';
import { Producto } from '../model/producto.model';

@Injectable({ providedIn: 'root' })
export class OrdenService{
    listChangedEvent: EventEmitter<Orden[]> = new EventEmitter();
    listOfProductos: Producto[] = [
        new Producto("P1","HAWAIANA","La pizza que unos cuestionan pero todos aman.","Jamón y Piña",120,"./assets/HNC.png","Pizzas", 1, 0),
        new Producto("P2","EXTRAVAGGANZA","La pizza más incluyente de nuestras especialidades.","Pepperoni, Carne Molida, Jamón, Chorizo, Pimiento, Cebolla, Champiñones Frescos, Aceitunas y Extra Queso", 120,"./assets/MEX.png","Pizzas", 1, 0),
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
    listOfOrdenes: Orden[] = [
        //new Orden("2206 0614 3610 5100 230",new Direccion("Jesus Cruz Morales", "9711265987", new Colonia("70150","Centro"), "Av. 24 de febrero", "Casa azul con blanco", "25", ""), this.listOfProductos,200,0,300,200,0,new Date()),
        //new Orden("2206 0614 3610 5100 230",new Direccion("Jesus Cruz Morales", "9711265987", new Colonia("70150","Centro"), "Av. 24 de febrero", "Casa azul con blanco", "25", ""), this.listOfProductos,200,0,300,200,0,new Date()),
        //new Orden("2206 0614 3610 5100 230",new Direccion("Jesus Cruz Morales", "9711265987", new Colonia("70150","Centro"), "Av. 24 de febrero", "Casa azul con blanco", "25", ""), this.listOfProductos,200,0,300,200,0,new Date()),
        //new Orden("2206 0614 3610 5100 230",new Direccion("Jesus Cruz Morales", "9711265987", new Colonia("70150","Centro"), "Av. 24 de febrero", "Casa azul con blanco", "25", ""), this.listOfProductos,200,0,300,200,0,new Date()),
        //new Orden("2206 0614 3610 5100 230",new Direccion("Jesus Cruz Morales", "9711265987", new Colonia("70150","Centro"), "Av. 24 de febrero", "Casa azul con blanco", "25", ""), this.listOfProductos,200,0,300,200,0,new Date()),
        //new Orden("2206 0614 3610 5100 230",new Direccion("Jesus Cruz Morales", "9711265987", new Colonia("70150","Centro"), "Av. 24 de febrero", "Casa azul con blanco", "25", ""), this.listOfProductos,200,0,300,200,0,new Date()),
    ];

    addOrden(orden: Orden){
        this.listOfOrdenes.push(orden);
    }

    getOrdenes(){
        return this.listOfOrdenes;
    }

    getOrden(codigo: string){
        return this.listOfOrdenes[this.findOrden(codigo)];
    }

    findOrden(codigo: string){
        for(let i=0; i<this.listOfOrdenes.length; i++){
            if(codigo==this.listOfOrdenes[i].codigo)
                return i;
        }
        return 0;
    }
}