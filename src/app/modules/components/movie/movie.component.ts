import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../../models/films';
import { Character } from '../../models/people';
import { FilmsService } from '../../services/films.service';
import { PeopleService } from '../../services/people.service';
import { Constantes } from '../../utils/constantes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  index: number;
  pelicula: Film;
  lstCharacters: Character[] = [];
  cols: any[];
  loading = false;
  colsFilter: any[];

  constructor(private filmsService: FilmsService,
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute) {} 

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.obtenerColumnas ()
    this.cargarInfoPelicula();          
  }

  cargarInfoPelicula() {
    if(this.index){
      this.filmsService.getFilm(this.index.toString()).subscribe(p => {          
        if(p) {
          this.pelicula = p;
          //----  OBTENER RESUMEN DE LOS ACTORES
          p.characters.forEach(c => {            
            this.peopleService.getPersonByURL(c).subscribe(p => {                        
              if(p){
                var newCharacter: Character = {name: '', height: '', gender: '', noMovies: ''};
                newCharacter.name = p.name;
                newCharacter.height = p.height;                
                newCharacter.gender = p.gender;
                newCharacter.url = p.url;
                newCharacter.noMovies = p.films.length.toString();
                this.lstCharacters.push(newCharacter);
              }
            });
          })
        } 
      });
    }
  }

  obtenerColumnas () {    
    this.cols = [
      { field: 'name', header: 'Name', type: 'label' },
      { field: 'height', header: 'Height', type: 'label' },      
      { field: 'gender', header: 'Gender', type: 'label' },
      { field: 'noMovies', header: 'No Movies', type: 'label' },      
      { field: '', header: 'Show More', type: 'button' }
    ];
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

  goToCharacter(character: Character) {        
    var id : string = character.url.split("people/")[1].split("/")[0];
    this.router.navigate([`people/${id}`]);
  }

}
