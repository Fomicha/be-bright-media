import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { WrapperComponent } from './common/modules/layouts/wrapper/wrapper.component';
import { HeaderComponent } from './common/modules/layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WrapperComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
