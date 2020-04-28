import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  isOpenMenuIconShown = true;

  constructor() { }

  ngOnInit() {
  }

  toggleMobileIcon() {
    this.isOpenMenuIconShown = !this.isOpenMenuIconShown;
  }

}
