import 'rxjs/Rx';
import {AppComponent} from './components/app/app.component'
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
]);
