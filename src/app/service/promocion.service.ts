import { EventEmitter, Injectable } from '@angular/core';
import { Promocion } from '../model/promocion.model';

@Injectable({ providedIn: 'root' })
export class PromocionService{
    listChangedEvent: EventEmitter<Promocion[]> = new EventEmitter();
    listOfPromociones: Promocion[] = [
        new Promocion("2 x $99","Canela Baitz, Cajeta Baitz, papotas, refresco 1.5L, cheesy bread y cheesy bread chorizo-jalapeño","https://assets.dominos.com.mx/dev/webOptimized/coupons/2X99.png"),
        new Promocion("Nueva masa italiana","$169 de 1 ingrediente +$50 hasta 4 ingredientes","https://assets.dominos.com.mx/dev/webOptimized/coupons/IT169.png"),
        new Promocion("2 pizzas x $298","2x298 en Especialidades de 1 a 4 Ingredientes.","https://assets.dominos.com.mx/dev/webOptimized/coupons/2X298.png"),
        new Promocion("Combo premium","Premium 1 ingrediente (Sartén grande, Orilla Rellena de Queso grande, Crunchy grande e Italiana extragrande)+ adicional (papotas, canela, cajeta baitz) por $249","https://assets.dominos.com.mx/dev/webOptimized/coupons/PRA249.png"),
        new Promocion("Combo grande","Grande original 1 ingrediente + adicional (papotas, canela, cajeta baitz) por $199","https://assets.dominos.com.mx/dev/webOptimized/coupons/GOA199.png"),
        new Promocion("Combo mediana","Mediana original 1 ingrediente + adicional (papotas, canela, cajeta baitz) por $159","https://assets.dominos.com.mx/dev/webOptimized/coupons/MOA159.png"),
        new Promocion("Mediana 1 ingrediente + $40","Mediana 1 ingrediente","https://assets.dominos.com.mx/dev/webOptimized/coupons/MED1.png"),
    ];

    getPromociones(){
        return this.listOfPromociones;
    }

    deletePromocion(index: number){
        this.listOfPromociones.splice(index, 1);
    }

    addPromocion(Promocion: Promocion) {
		this.listOfPromociones.push(Promocion);
	}

    updatePromocion(index: number, Promocion: Promocion){
        this.listOfPromociones[index]=Promocion;
    }

	getPromocion(index: number){
		return this.listOfPromociones[index];
	}
}