import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({    //a notação o faz ser um componente
  selector: 'app-calculadora',   //gera uma <tag> HTML com base nesse seletor   //esse vai ser o nome da <tag> HTML
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {   //implementa a interface OnInit (que tem a ver com o início do ciclo de vida)

  //injeção de dependências se dá no construtor
  constructor(private calculadoraService: CalculadoraService) { }  //criei um atributo que poderá ser utilizado em qualquer outro método usando o 'this'
  //os dois pontos mostram o tipo do atributo



  //atributos de controles do componente
  private num1: string;
  private num2: string;
  private result: number;
  private operacao: string;


  ngOnInit(): void {
    this.limpar();
  }


  limpar(): void
  {
    this.num1 = '0';
    this.num2 = null;
    this.result = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string): void
  {
    if(this.operacao === null)  //se não houver operação
    {
      this.num1 = this.concatenarNumero(this.num1, numero);
    }
    else
    {
      this.num2 = this.concatenarNumero(this.num2, numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string
  {
    //caso contenha apenas '0' ou nulo, reinicia o valor
    if(numAtual === '0' || numAtual === null)
    {
      numAtual = '';
    }

    //primeiro dígito e '.', concatena '0' antes do ponto
    if(numConcat === '.' && numAtual === '')
    {
      return '0.';
    }

    //caso '.' digitado e já contenha um '.', apenas retorna (desconsidera o '.')
    if(numConcat === '.' && numAtual.indexOf('.') > -1)
    {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void
  {
    //define a operação caso não exista uma
    if(this.operacao === null)
    {
      this.operacao = operacao;
      return;
    }

    //caso a operação definida e número 2 selecionado, efetua o cálculo da operação
    if(this.num2 !== null)
    {
      this.result = this.calculadoraService.calcular
      (
        parseFloat(this.num1),
        parseFloat(this.num2),
        this.operacao
      );

      this.operacao = operacao;
      this.num1 = this.result.toString();
      this.num2 = null;
      this.result = null;
    }
  }

  calcular(): void  //efetua o cálculo
  {
    if(this.num2 === null)
    {
      return;
    }

    this.result = this.calculadoraService.calcular
    (
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.operacao
    );
  }

  get display(): string   //método para exibir na tela o valor
  {
    if(this.result !== null)
    {
      return this.result.toString();
    }
    if(this.num2 !== null)
    {
      return this.num2;
    }
    else
    {
      return this.num1;
    }
  }
}
