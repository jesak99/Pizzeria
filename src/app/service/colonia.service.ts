import { EventEmitter, Injectable } from '@angular/core';
import { Colonia } from '../model/colonia.model';

@Injectable({ providedIn: 'root' })
export class ColoniaService{
    listChangedEvent: EventEmitter<Colonia[]> = new EventEmitter();
    listOfColonias: Colonia[] = [
        new Colonia("68040","Barrio Xochimilco"),
        new Colonia("70390","Pueblo El Barrio de la Soledad"),
        new Colonia("68080","Barrio Jalatlaco"),
        new Colonia("68090","Cosijoeza"),
        new Colonia("68080","Barrio Trinidad de las Huertas"),
        new Colonia("68783","Benito Juárez"),
        new Colonia("68000","Colonia Oaxaca Centro"),
        new Colonia("68103","Artículo 123")
    ];

    addColonia(colonia: Colonia){
        this.listOfColonias.push(colonia);
    }

    getColonias(){
        return this.listOfColonias;
    }

    getColonia(cp: string){
        return this.listOfColonias[this.findColonia(cp)];
    }

    findColonia(cp: string){
        for(let i=0; i<this.listOfColonias.length; i++){
            if(cp==this.listOfColonias[i].cp)
                return i;
        }
        return 0;
    }
}