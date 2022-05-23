import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAdicionalesComponent } from './crud-adicionales.component';

describe('CrudAdicionalesComponent', () => {
  let component: CrudAdicionalesComponent;
  let fixture: ComponentFixture<CrudAdicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAdicionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
