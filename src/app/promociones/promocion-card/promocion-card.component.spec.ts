import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionCardComponent } from './promocion-card.component';

describe('PromocionCardComponent', () => {
  let component: PromocionCardComponent;
  let fixture: ComponentFixture<PromocionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
