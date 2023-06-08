import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorNumerosComponent } from './conversor-numeros.component';

describe('ConversorNumerosComponent', () => {
  let component: ConversorNumerosComponent;
  let fixture: ComponentFixture<ConversorNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversorNumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
