import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]   //atributo para armazenar as tarefas

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void 
  {
    this.tarefas = this.listarTodos()  //tá puxando o método de baixo e encaixando no atributo
    /*
    PARA TESTE
    
    this.tarefas = [
      new Tarefa(1, 'Tarefa 1', false),
      new Tarefa(2, 'Tarefa 2', true)
    ]
    */
  }

  
  listarTodos(): Tarefa[]  //componente não precisa se preocupar com a regra de negócio, ela foi feita no SERVICE
  {
    return this.tarefaService.listarTodos()  
  }


  remover($event: any, tarefa: Tarefa): void
  {
    $event.preventDefault()  //o evento padrão de clicar em um botão é atualizar a página, mas não quero isso
    if(confirm('Deseja remover a tarefa "' + tarefa.nome + '"?'))  //confirm é um alert do JS
    {
      this.tarefaService.remover(tarefa.id)
      this.tarefas = this.listarTodos()
    }
  }

  alterarStatus(tarefa: Tarefa): void  //não precisa de evento tbm pq a Checkbox não realiza nada de diferente quando é clicada, como atualizar a página
  {
    if(confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?'))
    {
      this.tarefaService.alterarStatus(tarefa.id)   //alterarStatus vindo do TarefaService
      this.tarefas = this.listarTodos()
    }
  }

}
