import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsPageComponent} from './contacts-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactsPageRoutes} from './contacts-page.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactsPageRoutes
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
