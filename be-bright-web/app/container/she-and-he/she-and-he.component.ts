import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'bb-she-and-he',
  templateUrl: './she-and-he.component.html',
  styleUrls: ['./she-and-he.component.scss']
})
export class SheAndHeComponent implements OnInit {

  baseUrl = 'https://s3.amazonaws.com/sample-v1';

  images = ['architecture', 'boat', 'bonding', 'books', 'family', 'overlooking', 'overview', 'river', 'rocks', 'wedding'];

  list: any[] = [];

  public myOptions: NgxMasonryOptions = {
    percentPosition: true
  };

  constructor() {
  }

  ngOnInit(): void {
    this.list = this.images.map(name => `${this.baseUrl}/${name}.jpg`);
  }

}
