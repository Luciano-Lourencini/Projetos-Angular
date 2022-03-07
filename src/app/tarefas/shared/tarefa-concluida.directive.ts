import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'  //nome do ATRIBUTO HTML    //alterei o nome: tirei o "app" que tinha antes 
})
export class TarefaConcluidaDirective implements OnInit //deve-se implementar logo no início para ver se a tarefa foi concluída
{
  @Input() tarefaConcluida: boolean  //fornece a informação do HTML se a tarefa já está concluída   //para facilitar: ter o mesmo nome da DIRETIVA

  constructor(private el: ElementRef) {}  //ElementRef é uma referência do elemento HTML que vou adicionar ao componente
             //"el" de Element            //quando associo uma DIRETIVA ao elemente HTML, o Angular disponibiliza uma referência ao elemento
                                          //está servindo para poder ESTILIZAR o HTML, vai servir para "passar um traço" no que já foi concluído
  
  ngOnInit()
  {
      if(this.tarefaConcluida)
      {
        this.el.nativeElement.style.textDecoration = "line-through"
        //"el" é o elemento HTML
      }
  }
}
