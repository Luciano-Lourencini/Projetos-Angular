import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./listar";

import { CadastrarTarefaComponent } from "./cadastrar";

import { EditarTarefaComponent } from "./editar";

//aqui vai se criar um array de rotas e passa-se o caminho e para onde deve ser redirecionada
//vai saber como direcionar uma URL para um componente
export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'  //se colocar só 'tarefas', ele redireciona para o 'tarefas/listar'
    },

    {  //é um objeto JSON com 2 parâmetros
        path: 'tarefas/listar',
        component: ListarTarefaComponent  //é o componente que vai ser renderizado (exibido)
    },

    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },

    {
        path: 'tarefas/editar/:id',  //tem parâmetro pq eu preciso saber qual a tarefa eu estou editando
        component: EditarTarefaComponent
    }
]
