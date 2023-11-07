import { Component, OnInit } from '@angular/core';
import { Filme } from '../interfaces/filmes';

@Component({
  selector: 'lista',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  constructor() { }

  filmes: Filme[] = [];

  newFilme: Filme = {
    nome: '',
    genero: '',
    ano: '',
    nota: ''
  };

  ngOnInit() {
  }

  onAddMovieClick() {
    this.newFilme.nome = (document.querySelector('#title') as HTMLInputElement).value.toString(); // Convert the value to a string before assigning it to the nome property.

    this.newFilme.genero = (document.querySelector('#genre') as HTMLInputElement).value;
    this.newFilme.ano = (document.querySelector('#year') as HTMLInputElement).value;
    this.newFilme.nota = (document.querySelector('#rating') as HTMLInputElement).value;

    this.filmes.push(this.newFilme);
    this.newFilme = {
      nome: '',
      genero: '',
      ano: '',
      nota: ''
    };

    (document.querySelector('#title') as HTMLInputElement).value = '';
    (document.querySelector('#genre') as HTMLInputElement).value = '';
    (document.querySelector('#year') as HTMLInputElement).value = '';
    (document.querySelector('#rating') as HTMLInputElement).value = '';
  }

  deleteFilme(filme: Filme) {
    this.filmes.splice(this.filmes.indexOf(filme), 1);
  }
}
