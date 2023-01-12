import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { Person } from "../models/people";
import { AppEndPointConfig, APP_ENDPOINT_CONFIG } from "../utils/app-endpoint-config";
import { HttpResponseModel } from "../utils/responseHttp.model";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {    
    constructor(private http: HttpClient,
        @Inject(APP_ENDPOINT_CONFIG) private appEndPointConfig: AppEndPointConfig) { }

    getPeople(): Observable<Person[]> {     
        return this.http.get<HttpResponseModel>(`${this.appEndPointConfig.people}/`).pipe(
          map((response:HttpResponseModel) => {
            console.log(response);
            return response.results as Person[];
          })
        );
    }

    
    getPerson(personId: string): Observable<Person> {         
      return this.http.get<Person>(`${this.appEndPointConfig.people}/${personId}`).pipe(
        map((response:Person) => {          
          return response as Person;
        })
      );
    }

    getPersonByURL(url: string): Observable<Person> {         
      return this.http.get<Person>(`${url}`).pipe(
        map((response:Person) => {          
          return response as Person;
        })
      );
    }

}