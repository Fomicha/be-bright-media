import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SheAndHeComponent} from './she-and-he.component';
import {NgxMasonryModule} from 'ngx-masonry';
import {SheAndHeRoutes} from './she-and-he.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SheAndHeRoutes,
    NgxMasonryModule
  ],
  declarations: [
    SheAndHeComponent
  ],
  exports: [
    SheAndHeComponent
  ]
})
export class SheAndHeModule {
}
