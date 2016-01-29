import {Component} from 'angular2/core';
import {Movie} from 'app/interfaces/movie';

@Component({
    inputs: [
        'movie',
    ],
    selector: 'movie-list-item',
    templateUrl: 'app/components/movie-list-item/movie-list-item.component.html',
})
export class MovieListItemComponent implements OnInit {
    public movie: Movie;
}
