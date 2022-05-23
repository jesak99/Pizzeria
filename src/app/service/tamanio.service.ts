import { EventEmitter, Injectable } from '@angular/core';
import { Tamanio } from '../model/tamanio.model';

@Injectable({ providedIn: 'root' })
export class TamanioService{
    listChangedEvent: EventEmitter<Tamanio[]> = new EventEmitter();

    listOfTamanios: Tamanio[] = [
        new Tamanio("Chica",25, 3, 50),
        new Tamanio("Mediana",35, 5, 100),
        new Tamanio("Grande",45, 8, 150)
    ];

    getTamanios(){
        return this.listOfTamanios;
    }

    deleteTamanio(index: number){
        this.listOfTamanios.splice(index, 1);
    }

    addTamanio(Tamanio: Tamanio) {
		this.listOfTamanios.push(Tamanio);
	}

    updateTamanio(index: number, Tamanio: Tamanio){
        this.listOfTamanios[index]=Tamanio;
    }

	getTamanio(index: number){
		return this.listOfTamanios[index];
	}
}