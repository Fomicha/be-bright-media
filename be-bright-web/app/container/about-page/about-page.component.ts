import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'bb-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';

  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }

}
