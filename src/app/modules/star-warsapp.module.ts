import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StarWarsComponent } from "./components/star-wars/star-wars.component";
import { FilmsService } from "./services/films.service";
import { PeopleService } from "./services/people.service";
import { StarWarsAppRoutingModule } from "./star-warsapp-routing.module";
import { appEndPointExtranet, APP_ENDPOINT_CONFIG } from "./utils/app-endpoint-config";
import { MovieComponent } from './components/movie/movie.component';
import { CharacterComponent } from './components/character/character.component';
import { HeaderComponent } from './components/header/header.component';
import { PrimengCustomModule } from "../primeng-custom.module";

@NgModule({
    declarations: [
        StarWarsComponent,
        MovieComponent,
        CharacterComponent
    ],
    imports: [
      CommonModule,
      StarWarsAppRoutingModule,      
      ReactiveFormsModule,
      PrimengCustomModule,
      FormsModule
    ],
    providers: [
      PeopleService,
      FilmsService,
      {
        provide: APP_ENDPOINT_CONFIG,
        useValue: appEndPointExtranet
      }
    ]
  })
export class StarWarsAppModule { }