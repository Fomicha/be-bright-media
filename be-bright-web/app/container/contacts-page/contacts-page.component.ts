import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'bb-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  itemValue = '';

  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.items = this.db.list('items').valueChanges();
  }

  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
}
