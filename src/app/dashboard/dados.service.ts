import { Injectable } from '@angular/core';

import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService 
{
  readonly dados = [  //array bidimensional com 2 entradas
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ]

  constructor() {}

  obterDados(): Observable<any>
  {
    return new Observable(observable => {
      observable.next(this.dados)  //'next' serve para notificar todos os que "estão na escuta" do retorno dos dados / para retornar os dados para o cliente final (inscrito)
      observable.complete()  //completar a execução para não ter mais que "ficar escutando"
    })
  }
}
