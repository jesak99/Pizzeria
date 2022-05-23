import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaPizzaComponent } from './arma-pizza.component';

describe('ArmaPizzaComponent', () => {
  let component: ArmaPizzaComponent;
  let fixture: ComponentFixture<ArmaPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmaPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
