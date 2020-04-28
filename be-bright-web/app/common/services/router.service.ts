import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class RouterService {

  constructor(private readonly router: Router) {
  }

  isPage(page: string): boolean {
    return this.router.url.includes(page);
  }

}
