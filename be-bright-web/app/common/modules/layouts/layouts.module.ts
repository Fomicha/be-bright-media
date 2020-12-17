import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {WrapperComponent} from './wrapper/wrapper.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {MenuComponent} from './menu/menu.component';
import {MenuLinksService} from '../../services/menu-links.service';
import {RouterService} from '../../services/router.service';
import {LogoComponent} from './logo/logo.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    HeaderComponent,
    WrapperComponent,
    MenuComponent,
    LogoComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    WrapperComponent,
    LogoComponent,
    FooterComponent
  ],
  providers: [
    MenuLinksService,
    RouterService
  ]
})
export class LayoutsModule {
}
