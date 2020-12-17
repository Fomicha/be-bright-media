import { Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {RouterService} from '../../../services/router.service';
import {Router} from '@angular/router';

@Component({
  selector: 'bb-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  isContactsPage$: Observable<boolean> = this.router.events
    .pipe(startWith(''))
    .pipe(map(() => this.routerService.isPage('about')));

  isHomePage$: Observable<boolean> = this.router.events
    .pipe(startWith(''))
    .pipe(map(() => this.routerService.isPage('home')));

  constructor(private readonly routerService: RouterService,
              private readonly router: Router) {
  }

}
