import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MovieService} from '../../services/movie.service';
import {Movie} from 'app/interfaces/movie';
import {MovieListItemComponent} from '../movie-list-item/movie-list-item.component';

@Component({
    directives: [
        MovieListItemComponent,
    ],
    providers: [
        HTTP_PROVIDERS,
        MovieService,
    ],
    selector: 'movie-list',
    styleUrls: [
        'app/components/movie-list/movie-list.component.css',
    ],
    templateUrl: 'app/components/movie-list/movie-list.component.html',
})
export class MovieListComponent implements OnInit {
    public movies: Movie[];

    constructor(private _movieService: MovieService) { }

    getMovies() {
        this._movieService.getMoviesArray()
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
