import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsPageComponent} from './contacts-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactsPageComponent
  ],
  exports: [
    ContactsPageComponent
  ]
})
export class ContactsPageModule {
}
