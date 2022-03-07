import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './components'; //utilizei o Barrels para diminuir o tamanho

import { CalculadoraService } from './services';  //importa o arquivo de serviço


//para saber que é um módulo, precisa dessa notação abaixo
@NgModule({
  declarations: [   //onde serão colocados os componentes que farão parte do módulo
    CalculadoraComponent
  ],
  imports: [
    CommonModule //como não é um módulo da APLICAÇÃO e sim um sub-módulo da aplicação principal, obrigatoriamente precisa-se importar o CommonModule
  ],
  exports: [
    CalculadoraComponent  //no momento que o app.modules.ts faz o import da CalculadoraModule, ele mostra esse component
  ],
  providers: [  //serviço que pode ser utilizados em outros lugares
    CalculadoraService    //registrando o serviço como um provedor de serviços para o Angular
  ]
})
export class CalculadoraModule { }
