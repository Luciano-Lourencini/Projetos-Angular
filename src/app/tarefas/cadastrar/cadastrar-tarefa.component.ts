import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TarefaService, Tarefa } from '../shared';  //a classe e o serviço

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit 
{
  //validação do formulário para verificar se o form. está pronto para ser enviado ao cadastrar uma tarefa
  @ViewChild('formTarefa', { static: true}) formTarefa: NgForm //não cadastrar tarefa até o formulário estar válido
            //esse 'formTarefa' será configurado no HTML

  tarefa: Tarefa  //preciso armazenar o que coloquei nos campo de texto em algum local antes de salvá-lo

  constructor(
    private tarefaService: TarefaService,
    private router: Router  //a partir do 'Cadastrar', vai redirecionar para a tela de 'Listagem'  //precisa do módulo de navegação de rota
  ) { }

  ngOnInit(): void 
  {
    this.tarefa = new Tarefa()  //quando declarado, estava como NULL, preciso instanciá-lo
  }

  cadastrar():void
  {
    if(this.formTarefa.form.valid)
    {
      this.tarefaService.cadastrar(this.tarefa)
      this.router.navigate(["/tarefas"])  //volta pro 'Listar'
    }
  }
}
