import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INavigationData} from '../../../interfaces/navigation-data.interface';
import {MenuLinksService} from '../../../services/menu-links.service';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigationsLinks: INavigationData[];

  @Input()
  isCloseIconShown: boolean;

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
