import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map} from 'rxjs/operators';
import { Film } from "../models/films";
import { AppEndPointConfig, APP_ENDPOINT_CONFIG } from "../utils/app-endpoint-config";
import { HttpResponseModel } from "../utils/responseHttp.model";

@Injectable({
    providedIn: 'root'
})
export class FilmsService {    
    constructor(private http: HttpClient,
        @Inject(APP_ENDPOINT_CONFIG) private appEndPointConfig: AppEndPointConfig) { }

    getFilms(): Observable<Film[]> {         
      return this.http.get<HttpResponseModel>(`${this.appEndPointConfig.films}/`).pipe(
        map((response:HttpResponseModel) => {
          //console.log(response.results);
          return response.results as Film[];
        })
      );
    }
    
    getFilm(episodeId: string): Observable<Film> {         
      return this.http.get<Film>(`${this.appEndPointConfig.films}/${episodeId}`).pipe(
        map((response:Film) => {            
          return response as Film;
        })
      );
    }

    getFilmByURL(url: string): Observable<Film> {         
      return this.http.get<Film>(`${url}`).pipe(
        map((response:Film) => {          
          return response as Film;
        })
      );
    }

}