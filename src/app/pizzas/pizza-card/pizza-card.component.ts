import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto.model';

export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class PizzaCardComponent implements OnInit {
  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };

  @Input() pizza?: Producto;
  @Input() codigo: string="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }

  ordenar(){
    this.router.navigate(["/orden",this.codigo]);
  }

}
