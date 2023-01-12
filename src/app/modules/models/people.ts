export class Person {
	name?: string;
	height?: string;
	mass?: string;
	hair_color?: string;
	skin_color?: string;
	eye_color?: string;
	birth_year?: string;
	gender?: string;
	homeworld?: string; //endopoint
	films?: string []; //arreglo
    species?: string []; //arreglo 
	vehicles?: string []; //arreglo 
	starships?: string []; //arreglo 
	created?: string;
	edited?: string;
    url?: string;
}

export class Character {
	name?: string;
	height?: string;
	mass?: string;	
	gender?: string;
	url?: string;
	noMovies?: string;
}