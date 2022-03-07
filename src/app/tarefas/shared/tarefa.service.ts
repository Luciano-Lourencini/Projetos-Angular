import { Injectable } from '@angular/core';

import { Tarefa } from './';   //é a classe Tarefa, que está como 'tarefa.model.ts'

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }


  //métodos

  listarTodos(): Tarefa[]    //tipo de retorno é um array de Tarefa
  {                                           //localStorage é um objeto que está disponível pelo navegador
    const tarefas = localStorage['tarefas'];  //localStorage é um array chave/valor  //a chave que vai representar tarefas vai ser 'tarefas'
    return tarefas ? JSON.parse(tarefas) : [];       //JSON.parse pq o localStorage armazena string
    //esse "? :" significa um "if else" em uma só linha   //se retornar algo, retorna o JSON, se não, retorna array vazio
  }

  cadastrar(tarefa: Tarefa): void
  {
    const tarefas = this.listarTodos();

    tarefa.id = new Date().getTime();   //'tarefa' é o parâmetro do método   //utilizei esses métodos para o ID pq vai retornar um nº, fácil de gerar
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);   //estou convertendo as tarefas para String e guardando no localStorage
  }

  buscarPorId(id: number): Tarefa
  {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void
  {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach( (obj, index, objs) =>  //objs é a lista de tarefas
    {
      if(tarefa.id === obj.id)
      {
        objs[index] = tarefa;  //atribuo a nova tarefa na posição existente
      }
    }
    );
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void
  {
    let tarefas: Tarefa[] = this.listarTodos();   //vai usar o 'let' ao invés do 'const' pq vai alterar a lista e depois puxar de novo
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);  //o 'filter' filtra com a condição que passar pra ele
                                     //nesse caso, vai retornar todas as tarefas, menos a que eu quero remover
    localStorage['tarefas'] = JSON.stringify(tarefas);  //atribuo essa nova listagem à chave 'tarefas'
  }

  alterarStatus(id: number): void   //altera o parâmetro "concluido" de 'true' para 'false' e vice-versa
  {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach( (obj, index, objs) =>
    {
      if(id === obj.id)
      {
        objs[index].concluida = !obj.concluida;   //vai negar a condição (inverter de um para outro)
      } //index é a posição que quero atualizar
    }
    );
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
