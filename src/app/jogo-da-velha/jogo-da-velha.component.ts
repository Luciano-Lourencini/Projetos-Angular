import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit 
{

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void 
  {
    this.jogoDaVelhaService.inicializar()
  }

  //precisa exibir ou não as telas, preciso dos métodos no Componente
  get showInicio(): boolean
  {
    return this.jogoDaVelhaService.showInicio
  }

  get showTabuleiro(): boolean
  {
    return this.jogoDaVelhaService.showTabuleiro
  }

  get showFinal(): boolean
  {
    return this.jogoDaVelhaService.showFinal
  }


  //precisa chamar o INICIAR JOGO do Serviço
  iniciarJogo($event: any): void
  {
    $event.preventDefault()
    this.jogoDaVelhaService.iniciarJogo()
  }



  jogar(posX: number, posY: number): void
  {
    this.jogoDaVelhaService.jogar(posX,posY)
  }

  exibirX(posX: number, posY: number): boolean
  {
    return this.jogoDaVelhaService.exibirX(posX, posY)
  }

  exibirO(posX: number, posY: number): boolean
  {
    return this.jogoDaVelhaService.exibirO(posX, posY)
  }

  exibirVitoria(posX: number, posY: number): boolean
  {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY)
  }


  get jogador(): number
  {
    return this.jogoDaVelhaService.jogador
  }

  novoJogo($event: any): void
  {
    $event.preventDefault()
    this.jogoDaVelhaService.novoJogo()
  }
}
