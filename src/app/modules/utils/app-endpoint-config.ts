import { InjectionToken } from "@angular/core";

export interface AppEndPointConfig {    
    people:string;    
    planets:string;
    films:string;
    species:string;
    vehicles:string;
    starships:string;
}

export const appEndPointExtranet: AppEndPointConfig = {            
    people: 'https://swapi.dev/api/people', 
    planets: 'https://swapi.dev/api/planets',
    films: 'https://swapi.dev/api/films',
    species: 'https://swapi.dev/api/species',
    vehicles: 'https://swapi.dev/api/vehicles',
    starships: 'https://swapi.dev/api/starships'
}

export const APP_ENDPOINT_CONFIG = new InjectionToken<AppEndPointConfig>('app-endpoint-config');