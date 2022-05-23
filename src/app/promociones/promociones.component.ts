import { Component, OnInit } from '@angular/core';
import { Promocion } from '../model/promocion.model';
import { PromocionService } from '../service/promocion.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})

export class PromocionesComponent implements OnInit {
  value = '';
  listoOfPromociones : Promocion[]=[];

  constructor(private promocionService: PromocionService) { }

  ngOnInit(): void {
    this.listoOfPromociones = this.promocionService.getPromociones();
    this.promocionService.listChangedEvent.subscribe((listoOfPromociones: Promocion[])=>{
      this.listoOfPromociones = this.promocionService.getPromociones();
    });
  }

}
