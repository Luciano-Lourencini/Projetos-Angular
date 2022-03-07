import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardRoutes } from "./dashboard/dashboard-routing.module";
import { CalculadoraRoutes } from "./calculadora/calculadora-routing.module";
import { TarefaRoutes } from "./tarefas";
import { JogoDaVelhaRoutes } from "./jogo-da-velha/jogo-da-velha-routing.module";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'  //redireciona o caminho vazio 
        
    },

    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...TarefaRoutes,
    ...JogoDaVelhaRoutes
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],  //essa é a entrada principal
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
