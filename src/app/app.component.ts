import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTable';

  headers = ["Nome", "RU", "Curso", "Data de Nascimento"];

  rows = [
    {
      "Nome" : "Rodrigo Weber",
      "RU" : "910033",
      "Curso": "Análise e Desenvolvimento de Sistemas",
      "Data de Nascimento" : "13/01/1988"
    },
    {
      "Nome" : "Rodrigo Weber",
      "RU" : "910033",
      "Curso": "Análise e Desenvolvimento de Sistemas",
      "Data de Nascimento" : "13/01/1988"
    },
    {
      "Nome" : "Rodrigo Weber",
      "RU" : "910033",
      "Curso": "Análise e Desenvolvimento de Sistemas",
      "Data de Nascimento" : "13/01/1988"
    },
    {
      "Nome" : "Rodrigo Weber",
      "RU" : "910033",
      "Curso": "Análise e Desenvolvimento de Sistemas",
      "Data de Nascimento" : "13/01/1988"
    },
    {
      "Nome" : "Rodrigo Weber",
      "RU" : "910033",
      "Curso": "Análise e Desenvolvimento de Sistemas",
      "Data de Nascimento" : "13/01/1988"
    },
    {
      "Nome" : "Rodrigo Weber",
      "RU" : "910033",
      "Curso": "Análise e Desenvolvimento de Sistemas",
      "Data de Nascimento" : "13/01/1988"
    }
  ]
}
