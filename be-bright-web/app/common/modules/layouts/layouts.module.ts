import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {WrapperComponent} from './wrapper/wrapper.component';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material';
import {MenuComponent} from './menu/menu.component';
import {MenuLinksService} from '../../services/menu-links.service';
import {RouterService} from '../../services/router.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
  ],
  declarations: [
    HeaderComponent,
    WrapperComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    WrapperComponent
  ],
  providers: [
    MenuLinksService,
    RouterService
  ]
})
export class LayoutsModule {
}
