import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MovieService} from '../../services/movie.service';
import {Movie} from 'app/interfaces/movie';

@Component({
    providers: [
        HTTP_PROVIDERS,
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
            .subscribe(
                (movies) => {
                    this.movies = movies;
                },
                (error) => {
                    alert(`Server error. Try again later`);
                }
            )
        ;
    }

    ngOnInit() {
        this.getMovies();
    }
}
