import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';
import {RouterService} from '../../../services/router.service';

@Component({
  selector: 'bb-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  isMenuOpened = false;

  isNotHomePage$: Observable<boolean> = this.router.events
    .pipe(startWith(''))
    .pipe(map(() => this.routerService.isPage('home')));

  constructor(private readonly router: Router,
              private readonly routerService: RouterService) {
  }

  onMenuStateChange(isOpened: boolean): void {
    this.isMenuOpened = isOpened;
  }

}
