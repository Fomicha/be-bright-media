import {NgModule} from '@angular/core';
import {ContainerComponent} from './container.component';
import {CommonModule} from '@angular/common';
import {HomePageModule} from './modules/home-page/home-page.module';
import {ContainerRouter} from './container.routing';
import { HeaderModule } from './common/modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageModule,
    ContainerRouter,
    HeaderModule
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
