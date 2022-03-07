import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  //testes criados
  it('deve garantir que 1 + 4 = 5',          // 'it' é uma função do Jasmine
    inject([CalculadoraService], (service: CalculadoraService) => {  //"injeta o CalculadoraService e me retorna ele aqui (no 'service:')" - cria uma instância do CalcServ
      let soma = service.calcular(1,4,CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve retornar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(1,4,'%');  //no caso, o '%' não foi setado, deve retornar 0
      expect(operacaoInvalida).toEqual(0);
    })
  );

});
