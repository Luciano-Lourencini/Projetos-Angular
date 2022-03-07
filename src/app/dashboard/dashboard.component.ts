import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DadosService } from './dados.service';

declare var google: any  //variável global para se comunicar com biblioteca externa

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit 
{
  private dados: any  //variável local para armazenar dados

  constructor(private dadosService: DadosService) {} //SEMPRE QUE EU IMPORTAR UM SERVIÇO, eu injeto no construtor

  ngOnInit(): void 
  {
    //vai consumir o 'obterDados' do serviço, que é um OBSERVABLE
    this.dadosService.obterDados().subscribe(
      dados => {  //esses serão os dados que vou receber da aplicação
        this.dados = dados
        this.init()
      }
    )
  }

  init(): void  //inicializar a API do Google com delay de 1 segundo pra dar tempo de carregar tudo
  {
    if(typeof(google) !== 'undefined') //se por algum motivo ela não foi criada, não quero que quebre o código
    {
      google.charts.load('current', {'packages':['corechart']}) //executa o carregamento do pacote
      setTimeout( () => { google.charts.setOnLoadCallback(this.exibirGraficos()) }, 1000);  //"assim que o google terminar de carregar, vai chamar essa função", depois de 1s
    }
  }

  exibirGraficos(): void
  {
    this.exibirPieChart()
    this.exibir3dPieChart()
    this.exibirDonutChart()
    this.exibirBarChart()
    this.exibirLineChart()
    this.exibirColumnChart()
  }

  
  exibirPieChart(): void
  {
    const el = document.getElementById('pie_chart')  //obtém uma referência da div
    const chart = new google.visualization.PieChart(el)  //instancio o gráfico e passo a div que será exibido   //criará a representação do gráfico e armazenará na variável

    chart.draw(this.obterDataTable(), this.obterOpcoes())  //desenha|popula o gráfico
  }


  obterDataTable(): any
  {
    //intancio o DataTable
    const data = new google.visualization.DataTable()

    //mapeio os dados
    data.addColumn('string', 'Mês')
    data.addColumn('number', 'Quantidade')
    data.addRows(this.dados)

    return data
  }

  obterOpcoes(): any 
  {
  	return {
    	'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    };
  }



  exibir3dPieChart(): void
  {
    const el = document.getElementById('3d_pie_chart')
    const chart = new google.visualization.PieChart(el)
    const opcoes = this.obterOpcoes()

    opcoes['is3D'] = true
    chart.draw(this.obterDataTable(),opcoes)
  }

  exibirDonutChart(): void
  {
    const el = document.getElementById('donut_chart')
    const chart = new google.visualization.PieChart(el)
    const opcoes = this.obterOpcoes()

    opcoes['pieHole'] = 0.4
    chart.draw(this.obterDataTable(),opcoes)
  }

  exibirBarChart(): void
  {
    const el = document.getElementById('bar_chart')
    const chart = new google.visualization.BarChart(el)

    chart.draw(this.obterDataTable(),this.obterOpcoes())
  }

  exibirLineChart(): void
  {
    const el = document.getElementById('line_chart')
    const chart = new google.visualization.LineChart(el)

    chart.draw(this.obterDataTable(),this.obterOpcoes())
  }

  exibirColumnChart(): void
  {
    const el = document.getElementById('column_chart')
    const chart = new google.visualization.ColumnChart(el)

    chart.draw(this.obterDataTable(),this.obterOpcoes())
  }

}
