import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {INavigationData} from '../interfaces/navigation-data.interface';

@Injectable()
export class MenuLinksService {

  navigations: INavigationData[] = [
    {link: '/she-and-he', linkName: 'she&he'},
    {link: '/music', linkName: 'music'},
    {link: '/events', linkName: 'events'},
    {link: '/video', linkName: 'video'},
    {link: '/other', linkName: 'other'},
    {link: '/about', linkName: 'contacts'}
  ];

  private readonly linksSource = new BehaviorSubject<INavigationData[]>(this.navigations);

  readonly menuLinks = this.linksSource.asObservable();

}
