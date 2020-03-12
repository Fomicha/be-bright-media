import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        RouterModule
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
