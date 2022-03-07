export class Tarefa  //uma classe normal
{
    constructor(
        public id?: number,    //interrogação serve pra mostrar que são opcionais
        public nome?: string,
        public concluida?: boolean) {}   //'id', 'nome' e 'concluida' se tornarão atributos da classe
}                                        //por causa do 'public'
