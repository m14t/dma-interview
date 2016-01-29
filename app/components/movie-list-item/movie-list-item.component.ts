import {Component} from 'angular2/core';
import {Movie} from 'app/interfaces/movie';

@Component({
    inputs: [
        'movie',
    ],
    selector: 'movie-list-item',
    styleUrls: [
        'app/components/movie-list-item/movie-list-item.component.css',
    ],
    templateUrl: 'app/components/movie-list-item/movie-list-item.component.html',
})
export class MovieListItemComponent implements OnInit {
    public movie: Movie;

    /**
     * Convert movie.run_time to a formated string.
     *
     * Ideally this would be a Pipe, but given the time constraint is done here
     */
    getFormatedRuntime() {
        let run_time = parseInt(this.movie.run_time, 10);
        const SECS_IN_HOUR = 60*60;
        const SECS_IN_MIN = 60;

        if (isNaN(run_time)) {
            return 'unknown';
        }

        let output = `${Math.round(run_time / SECS_IN_HOUR)}hrs`;
        let minutes = Math.round(run_time % SECS_IN_HOUR) / SECS_IN_MIN;
        if (0 !== minutes) {
            output += ` ${Math.round(minutes % 60)}mins`;
        }
        return output;
    }
}
