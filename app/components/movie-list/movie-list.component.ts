import {Component, OnInit} from 'angular2/core';
import {MovieService} from '../../services/movie.service';
import {Movie} from 'app/interfaces/movie';

@Component({
    providers: [
        MovieService,
    ],
    selector: 'movie-list',
    templateUrl: 'app/components/movie-list/movie-list.component.html',
})
export class MovieListComponent implements OnInit {
    public movies: Movie[];

    constructor(private _movieService: MovieService) { }

    getMovies() {
        this._movieService.getMovies()
            .then((movies) => {
                this.movies = movies;
            })
        ;
    }

    ngOnInit() {
        this.getMovies();
    }
}
