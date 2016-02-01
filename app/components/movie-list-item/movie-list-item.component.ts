import {Component} from 'angular2/core';
import {Movie} from 'app/interfaces/movie';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TimeFormatPipe} from 'app/pipes/time-format.pipe';

@Component({
    directives: [
        ROUTER_DIRECTIVES,
    ],
    inputs: [
        'movie',
    ],
    pipes: [TimeFormatPipe],
    selector: 'movie-list-item',
    styleUrls: [
        'app/components/movie-list-item/movie-list-item.component.css',
    ],
    templateUrl: 'app/components/movie-list-item/movie-list-item.component.html',
})
export class MovieListItemComponent implements OnInit {
    public movie: Movie;
}
