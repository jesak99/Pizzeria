import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalCardComponent } from './adicional-card.component';

describe('AdicionalCardComponent', () => {
  let component: AdicionalCardComponent;
  let fixture: ComponentFixture<AdicionalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
