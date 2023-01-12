import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { MovieComponent } from './components/movie/movie.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';

const routes: Routes = [
    {
      path: '',
      component: StarWarsComponent
    },
    {
      path: 'home',
      component: StarWarsComponent
    },
    {
      path: 'film/:id',
      component: MovieComponent
    },
    {
      path: 'people',
      component: CharacterComponent
    },
    {
      path: 'people/:id',
      component: CharacterComponent
    },
    {
      path: '**',
      component: StarWarsComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StarWarsAppRoutingModule { }