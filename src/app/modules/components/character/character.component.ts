import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmSummary } from '../../models/films';
import { Character, Person } from '../../models/people';
import { FilmsService } from '../../services/films.service';
import { PeopleService } from '../../services/people.service';
import { PlanetService } from '../../services/planets.service';
import { SpecieService } from '../../services/species.service';
import { Constantes } from '../../utils/constantes';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  index: number;
  logoCharacter: string = Constantes.portadaCharac;
  character: Person;
  lstFilmsCharacters: FilmSummary[] = [];
  homeworld: string;
  specie: string;


  constructor(private filmsService: FilmsService,
    private peopleService: PeopleService,
    private planetService: PlanetService,
    private specieService: SpecieService,
    private router: Router,
    private route: ActivatedRoute) {} 

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id']; 
    this.cargarInfoCharacter();    
  }

  cargarInfoCharacter() {
    if(this.index){
      this.peopleService.getPerson(this.index.toString()).subscribe(p => {          
        if(p) {
          this.character = p;
          this.planetService.getPlanetByURL(p.homeworld).subscribe(pl => {
            this.homeworld = pl.name;
          })

          if(p.species.length == 0){
            this.specie = "No registrada";
          }else{
            if(p.species.length == 1){
              this.specieService.getSpecieByURL(p.species[0]).subscribe(sp => {
              this.specie = sp.name;
            })
            }else{
              this.specie = "Más de una especie.";
            }
          }

          this.obtenerInformacionPeliculasCharacter(p.films);
        } 
      });
    }
  }

  obtenerInformacionPeliculasCharacter (lstEndPoints: string []) {
    //----  OBTENER RESUMEN DE LOS ACTORES
    lstEndPoints.forEach(r => {            
      this.filmsService.getFilmByURL(r).subscribe(p => {                        
        if(p){
          var newFilm: FilmSummary = {title: '', episode_id: '', url: ''};
          newFilm.title = p.title;
          newFilm.episode_id = p.episode_id;                          
          newFilm.url = p.url;          
          this.lstFilmsCharacters.push(newFilm);
        }
      });
    })
  }

  obtenerLinkPortada (id: string): string {
    var char_id = id.toString();
    switch (char_id){
      case '1':
        return Constantes.portadaEP1;
      case '2':
        return Constantes.portadaEP2;
      case '3':
        return Constantes.portadaEP3;
      case '4':
        return Constantes.portadaEP4;
      case '5':
        return Constantes.portadaEP5;
      case '6':
        return Constantes.portadaEP6;
      default:
        return Constantes.imgNoEncontrada;
    }  
  }

  goToMovie(id:string) {
    var idNumber:number = +id;
    var idNumberModif:number = idNumber>3 ? idNumber-3 : idNumber+3;
    this.router.navigate([`film/${idNumberModif}`]);
  }

}
