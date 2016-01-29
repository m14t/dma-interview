import {Component} from 'angular2/core';
import {MovieListComponent} from '../movie-list/movie-list.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    directives: [
        ROUTER_DIRECTIVES,
    ],
    selector: 'dma-interview',
    templateUrl: 'app/components/app/app.component.html',
})
@RouteConfig([
  {path: '/', redirectTo: ['MovieList'] },
  {path: '/movies', name: 'MovieList', component: MovieListComponent, useAsDefault: true},
])
export class AppComponent {
    public title = 'DMA-Interview Test';
}
