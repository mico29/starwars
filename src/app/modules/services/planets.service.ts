import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { Planet } from "../models/planets";
import { AppEndPointConfig, APP_ENDPOINT_CONFIG } from "../utils/app-endpoint-config";
import { HttpResponseModel } from "../utils/responseHttp.model";

@Injectable({
    providedIn: 'root'
})
export class PlanetService {    
    constructor(private http: HttpClient,
        @Inject(APP_ENDPOINT_CONFIG) private appEndPointConfig: AppEndPointConfig) { }

    
    getPlanetByURL(url: string): Observable<Planet> {         
      return this.http.get<Planet>(`${url}`).pipe(
        map((response:Planet) => {          
          return response as Planet;
        })
      );
    }    

}