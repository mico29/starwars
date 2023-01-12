export class Film {
	title?: string;
	episode_id?: string;
	opening_crawl?: string;
	director?: string;
    producer?: string;
	release_date?: string;
	characters?: string []; //arreglo
    planets?: string []; //arreglo
    starships?: string []; //arreglo
    vehicles?: string []; //arreglo
    species?: string []; //arreglo
	created?: string;
	edited?: string;
    url?: string;
}

export class FilmSummary {
	title?: string;
	episode_id?: string;
	url?: string;	
}