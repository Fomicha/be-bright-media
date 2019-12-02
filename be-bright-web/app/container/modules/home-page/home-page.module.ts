import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule {
}
