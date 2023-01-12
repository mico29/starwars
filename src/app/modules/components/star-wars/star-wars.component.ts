import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from '../../models/films';
import { FilmsService } from '../../services/films.service';
import { Constantes, Portadas } from '../../utils/constantes';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  logoStarWars: string = Constantes.logoStarWars;

  lstPeliculas: Film [];

  constructor(private filmsService: FilmsService,
    private router: Router) {} 

  ngOnInit(): void {
    this.cargarInformacionInicial();
  }

  cargarInformacionInicial() {    
    this.cargarPeliculas();
  }

  cargarPeliculas() {    
    this.filmsService.getFilms().subscribe(results => {    
      if(results && results.length>0) {        
        results.sort(function (a, b) {
          if (a.episode_id > b.episode_id) {
            return 1;
          }
          if (a.episode_id < b.episode_id) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }); 
        this.lstPeliculas = results;        
      }      
    });    
  }

  obtenerLinkPortada (id: string): string {
    var idNumber = +id;
    return Portadas.lstPortadas.find(peli => peli.id === idNumber).dir_port;
    /*var x = Portadas.lstPortadas.find(peli => peli.id === idNumber);
    if(x){      
      return x.dir_port;
    }else{
      return Constantes.imgNoEncontrada;
    }*/
  }

  obtenerLinkPortada2 (id: string): string {
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
