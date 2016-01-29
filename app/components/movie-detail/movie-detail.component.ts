import {MovieListItemComponent} from '../movie-list-item/movie-list-item.component';
import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MovieService} from '../../services/movie.service';
import {Movie} from 'app/interfaces/movie';
import {RouteParams} from 'angular2/router';

@Component({
    directives: [
        MovieListItemComponent,
    ],
    inputs: ['movie'],
    providers: [
        HTTP_PROVIDERS,
        MovieService,
    ],
    selector: 'movie-detail',
    styleUrls: [
        'app/components/movie-detail/movie-detail.component.css',
    ],
    templateUrl: 'app/components/movie-detail/movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
    public movie: Movie;

    constructor(
        private _movieService: MovieService,
        private _routeParams: RouteParams
    ) {
    }

    getMovieBySlug() {
        if (!this.movie) {
            let slug = this._routeParams.get('slug');
            this._movieService.getMovieBySlug(slug).subscribe(
                (movie) => {
                    this.movie = movie;
                }
            );
        }
    }

    goBack() {
        window.history.back();
    }

    ngOnInit() {
        this.getMovieBySlug();
    }
}
