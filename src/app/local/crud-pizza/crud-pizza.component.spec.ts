import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPizzaComponent } from './crud-pizza.component';

describe('CrudPizzaComponent', () => {
  let component: CrudPizzaComponent;
  let fixture: ComponentFixture<CrudPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
