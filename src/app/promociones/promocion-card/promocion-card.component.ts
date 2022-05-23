import { Component, Input, OnInit } from '@angular/core';
import { Promocion } from 'src/app/model/promocion.model';

@Component({
  selector: 'app-promocion-card',
  templateUrl: './promocion-card.component.html',
  styleUrls: ['./promocion-card.component.css']
})
export class PromocionCardComponent implements OnInit {
  @Input() promocion?: Promocion;
  @Input() index: number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
