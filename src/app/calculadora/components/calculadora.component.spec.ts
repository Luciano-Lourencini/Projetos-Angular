import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

import { CalculadoraService } from '../services';

import { By } from '@angular/platform-browser';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers: [ CalculadoraService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);   //*aqui
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deve garantir que 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));    //fixture é uma instância de CalculadoraComponent. Criado no último método 'beforeEach()'*
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));     //debugElement é basicamente o HTML da página
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));
    
    btn3.triggerEventHandler('click',null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click',null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click',null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click',null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });

});
