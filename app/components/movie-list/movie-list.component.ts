import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MovieListItemComponent} from '../movie-list-item/movie-list-item.component';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../interfaces/movie';
import {PaginatorComponent} from '../paginator/paginator.component';

const ASC = 'ASC';
const DESC = 'DESC';

@Component({
    directives: [
        MovieListItemComponent,
        PaginatorComponent,
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
    public displayedMovies: Movie[];
    public filter: string;
    public movies: Movie[];
    public sortBy: string = 'title';
    public sortDirection: string = ASC;

    constructor(private _movieService: MovieService) { }

    filterData() {
        let regexStr = (this.filter || '')
            .split(/\W+/)
            .join('.*')
        ;
        let regex = new RegExp(regexStr, 'i');

        this.displayedMovies = this.movies.filter((movie) => {
            return regex.test(movie.title);
        })
    }

    fetchMovies() {
        return this._movieService.getMoviesArray()
            .subscribe(
                (movies) => {
                    this.movies = movies;
                    this.filterData();
                    this.sortData();
                },
                (error) => {
                    alert(`Server error. Try again later`);
                }
            )
        ;
    }

    sortData() {
        // Need to fix this so that it is triggered after the change event
        // persists via ngModel (which would allow us to remove this setTimeout)
        setTimeout(() => {
            this.displayedMovies.sort((a, b) => {
                let aVal = a[this.sortBy];
                let bVal = b[this.sortBy];

                if (
                    'string' === (typeof aVal) &&
                    'string' === (typeof bVal)
                ) {
                    aVal = aVal.toLowerCase();
                    bVal = bVal.toLowerCase();
                }

                if (aVal == bVal) {
                    return 0;
                }

                if (aVal < bVal) {
                    return (ASC === this.sortDirection) ? -1 : 1;
                }

                return (ASC === this.sortDirection) ? 1 : -1;
            })

            // This is a simple way to assign a clone of our array to the same
            // variable, which for some reason is necessary to trigger a change
            // event detectable inside our Paginator
            this.displayedMovies = this.displayedMovies.slice(0);
        }, 0);
    }

    toggleSortDirection() {
        if (ASC === this.sortDirection) {
            this.sortDirection = DESC;
        } else {
            this.sortDirection = ASC;
        }
        this.sortData();
    }

    ngOnInit() {
        this.fetchMovies();
    }
}
