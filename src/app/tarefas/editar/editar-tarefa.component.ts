import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit 
{

  @ViewChild ('formTarefa') formTarefa: NgForm
  tarefa: Tarefa

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,  //utilizaremos o ROUTE pra obter o parâmetro para carregar a tarefa
    private router: Router
    ) { }

  ngOnInit(): void 
  {          //"+" faz a conversão para numérico
    const id = +this.route.snapshot.params['id'];  //'params' está mapeado todos os parâmetros contidos na URL através da marcação ":" (tarefas-routing.module.ts na parte EDITAR)
                                                  //como o parâmetro lá era 'id', então só usar a mesma coisa
    this.tarefa = this.tarefaService.buscarPorId(id);
    //essa tarefa terá o ID que estou passando
  }

  atualizar(): void
  {
    if(this.formTarefa.form.valid)
    {
      this.tarefaService.atualizar(this.tarefa)
      this.router.navigate(['/tarefas'])  //volta pra principal
    }
  }

}
