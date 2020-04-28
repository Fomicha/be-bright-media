import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AboutPageComponent} from './about-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AboutPageComponent
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule {
}
