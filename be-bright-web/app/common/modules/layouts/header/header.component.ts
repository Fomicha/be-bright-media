import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INavigationData} from '../../../interfaces/navigation-data.interface';
import {MenuLinksService} from '../../../services/menu-links.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';
import {RouterService} from '../../../services/router.service';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigationsLinks: INavigationData[];

  @Input()
  isBlackOpenMenuIcon: boolean;

  @Input()
  isIconShown: boolean;

  @Output()
  menuToggleOutput = new EventEmitter<void>();

  constructor(private readonly menuLinksService: MenuLinksService) {
  }

  ngOnInit() {
    this.menuLinksService.menuLinks
      .subscribe(links => this.navigationsLinks = links);
  }

  menuToggle(): void {
    this.menuToggleOutput.emit();
  }

}
