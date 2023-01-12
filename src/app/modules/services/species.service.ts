import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { Specie } from "../models/species";
import { AppEndPointConfig, APP_ENDPOINT_CONFIG } from "../utils/app-endpoint-config";
import { HttpResponseModel } from "../utils/responseHttp.model";

@Injectable({
    providedIn: 'root'
})
export class SpecieService {    
    constructor(private http: HttpClient,
        @Inject(APP_ENDPOINT_CONFIG) private appEndPointConfig: AppEndPointConfig) { }

    
    getSpecieByURL(url: string): Observable<Specie> {         
      return this.http.get<Specie>(`${url}`).pipe(
        map((response:Specie) => {          
          return response as Specie;
        })
      );
    }    

}