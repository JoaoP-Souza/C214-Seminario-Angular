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
    component.newFilme.nome = 'Filme 1';
    component.newFilme.genero = 'Ação';
    component.newFilme.ano = '2022';
    component.newFilme.nota = '4.5';

    component.onAddMovieClick();

    expect(component.filmes.length).toBe(1);
    expect(component.filmes[0]).toEqual({
      nome: 'Filme 1',
      genero: 'Ação',
      ano: '2022',
      nota: '4.5',
    });
  });


  it('should not add a movie with invalid data', () => {
    component.newFilme.nome = '';
    component.newFilme.genero = '';
    component.newFilme.ano = '';
    component.newFilme.nota = '';

    component.onAddMovieClick();

    expect(component.filmes.length).toBe(0);
  });
  it('should remove a movie', () => {
    component.filmes = [{
      nome: 'Filme 1',
      genero: 'Ação',
      ano: '2022',
      nota: '4.5',
    }];
  
    component.deleteFilme(component.filmes[0]);
  

    expect(component.filmes.length).toBe(0);
  });
  

});



