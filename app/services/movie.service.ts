import {Injectable} from 'angular2/core';
import {MOVIES} from './stubs/movies';

@Injectable()
export class MovieService {
    getMovies() {
        return Promise.resolve(MOVIES);
    }
}
