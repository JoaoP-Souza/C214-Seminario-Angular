import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { AdicionarFilmeComponent } from './adicionar-filme/adicionar-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    AdicionarFilmeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
