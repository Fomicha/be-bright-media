import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {INavigationData} from '../../../interfaces/navigation-data.interface';
import {MenuLinksService} from '../../../services/menu-links.service';

@Component({
  selector: 'bb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navigationsLinks: INavigationData[];

  @Output()
  onMenuToggle = new EventEmitter<void>();

  constructor(private readonly menuLinksService: MenuLinksService) { }

  ngOnInit() {
    this.menuLinksService.menuLinks
      .subscribe(links => this.navigationsLinks = links);
  }

  menuToggle(): void {
    this.onMenuToggle.emit();
  }

}
