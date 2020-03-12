import {NgModule} from '@angular/core';
import {ContainerComponent} from './container.component';
import {CommonModule} from '@angular/common';
import {HomePageModule} from './modules/home-page/home-page.module';
import {ContainerRouter} from './container.routing';
import { HeaderModule } from './common/modules/layouts/header/header.module';
import {AboutPageModule} from './modules/about-page/about-page.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageModule,
    ContainerRouter,
    HeaderModule,
    AboutPageModule
  ],
  declarations: [
    ContainerComponent
  ],
  exports: [

  ],
  providers: [

  ]
})
export class ContainerModule {
}
