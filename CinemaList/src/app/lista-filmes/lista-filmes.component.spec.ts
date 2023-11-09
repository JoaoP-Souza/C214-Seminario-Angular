import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmesComponent } from './lista-filmes.component';

describe('ListaFilmesComponent', () => {
  let component: ListaFilmesComponent;
  let fixture: ComponentFixture<ListaFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFilmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  it('should add a movie ', () => {
    const nameFilm = 'Filme 1';
    const genreFilm = 'Ação';
    const yearFilm = '2022';
    const scoreFilm = '4.5';
    component.newFilme.nome = nameFilm;
    component.newFilme.genero = genreFilm;
    component.newFilme.ano = yearFilm;
    component.newFilme.nota = scoreFilm;
  
    const result = component.onAddMovieClick();
  
    expect(component.filmes.length).toBe(1);
    expect(component.filmes[0]).toEqual({
      nome: 'Filme 1',
      genero: 'Ação',
      ano: '2022',
      nota: '4.5',
    });
  
    expect(component.newFilme).toEqual({ nome: '', genero: '', ano: '', nota: '' });
  
    expect(result).toBe('Filme adicionado com sucesso!');
  });
  

  it('should not add a movie with invalid data', () => {
    component.newFilme.nome = '';
    component.newFilme.genero = '';
    component.newFilme.ano = '';
    component.newFilme.nota = '';
  
    const result = component.onAddMovieClick();
  
    expect(component.filmes.length).toBe(0);
  
  expect(result).toBe('Por favor, preencha todos os campos obrigatórios.');
  });

  it('should handle error when accessing input fields', () => {
    spyOn(document, 'querySelector').and.returnValue(null);
  
    const result = component.onAddMovieClick();

    expect(result).toBe('Erro ao acessar os campos de entrada.');
  });
  
  
  it('should remove a movie', () => {
    const initialMovies = [
      {
        nome: 'Filme 1',
        genero: 'Ação',
        ano: '2022',
        nota: '4.5',
      },
      {
        nome: 'Filme 2',
        genero: 'Comédia',
        ano: '2021',
        nota: '3.8',
      },
    ];
  
    component.filmes = [...initialMovies];
    
    const movieToRemove = initialMovies[0];
    const expectedMoviesAfterRemoval = [initialMovies[1]];
  
    const result = component.deleteFilme(movieToRemove);
  
    expect(component.filmes).toEqual(expectedMoviesAfterRemoval);
    expect(result).toBe('Filme excluído com sucesso!');
  });
  
  

});



