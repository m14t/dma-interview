import {Http}       from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from '../interfaces/movie';

@Injectable()
export class MovieService {
    private _moviesUrl = '/data.json';

    constructor (private http: Http) {
    }

    getMoviesArray() {
        return this.http.get(this._moviesUrl)
            // Parse the data to json (and only keep the items)
            .map(res => res.json().items)
            // Make the dates real dates
            .map((movies) => {
                return movies.map((movie: any) => {
                    movie.date = new Date(movie.date);
                    return <Movie> movie;
                });
            })
            .catch(this.logAndPassOn)
        ;
    }

    getMovieBySlug(slug: string) {
        return this.getMoviesArray()
            .map((movies: Movie[]) => {
                return movies.filter((movie: Movie) => {
                    return movie.slug === slug;
                })[0];
            })
        ;
    }

    private logAndPassOn (error: Error) {
        console.error(error);
        return Observable.throw(error);
    }
}
