import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediente } from '../model/ingrediente.model';

@Injectable({ providedIn: 'root' })
export class IngredienteService{
    listChangedEvent: EventEmitter<Ingrediente[]> = new EventEmitter();
    listOfIngredientes: Ingrediente[] = [
        new Ingrediente("Pepperoni",10),
        new Ingrediente("Carne Molida",10),
        new Ingrediente("Jamón",10),
        new Ingrediente("Chorizo",10),
        new Ingrediente("Pimiento",10),
        new Ingrediente("Cebolla",10),
        new Ingrediente("Champiñones Frescos",10),
        new Ingrediente("Aceitunas",10),
        new Ingrediente("Extra Queso",10),
    ];

    getIngredientes(){
        return this.listOfIngredientes;
    }

    deleteIngrediente(index: number){
        this.listOfIngredientes.splice(index, 1);
    }

    addIngrediente(Ingrediente: Ingrediente) {
		this.listOfIngredientes.push(Ingrediente);
	}

    updateIngrediente(index: number, Ingrediente: Ingrediente){
        this.listOfIngredientes[index]=Ingrediente;
    }

	getIngrediente(index: number){
		return this.listOfIngredientes[index];
	}
}