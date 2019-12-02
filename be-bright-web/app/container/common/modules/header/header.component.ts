import { Component, OnInit } from '@angular/core';
import {INavigationData} from './navigation-data.interface';

@Component({
  selector: 'bb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigations: INavigationData[] = [
    {link: 'she-and-he', linkName: 'she&he'},
    {link: 'music', linkName: 'music'},
    {link: 'events', linkName: 'events'},
    {link: 'video', linkName: 'video'},
    {link: 'other', linkName: 'other'},
    {link: 'contacts', linkName: 'contacts'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
