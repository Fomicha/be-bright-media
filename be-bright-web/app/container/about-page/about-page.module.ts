import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AboutPageComponent} from './about-page.component';
import {AboutPageRoutes} from './about-page.routing';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AboutPageRoutes
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
