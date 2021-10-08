import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTable';

  //código abaixo foi o que usei para entender como funcionava o *ngFor
  /*listaProdutos: any[] = [
    { id: 1, nome: 'curso de angular', preco: 35.65, validade: 2021-10-31 },
    { id: 2, nome: 'curso de Ionic', preco: 49.90, validade: 2021-11-30 },
    { id: 3, nome: 'curso de angular', preco: 39.90, validade: "2022-01-01" }
  ];*/

  //criei o array com os objetos com de cada aluno
  alunos: any[] = [
    {
      nome : 'Rodrigo Weber',
      ru : 910033,
      curso: 'Análise e Desenvolvimento de Sistemas',
      data : '13/01/1988'
    },
    {
      nome : 'Rogério Weber',
      ru : 123456,
      curso: 'Gastronomia',
      data : '31/10/1994'
    },
    {
      nome : 'Michele Dutra',
      ru : 543211,
      curso: 'Administração de Empresas',
      data : '26/03/1991'
    },
    {
      nome : 'Patrícia Silva',
      ru : 523561,
      curso: 'Ciência de Dados',
      data : '12/05/1991'
    },
    {
      nome : 'Ana Maria Braga',
      ru : 123123,
      curso: 'Gastronomia',
      data : '01/04/1949'
    }
  ];
}
