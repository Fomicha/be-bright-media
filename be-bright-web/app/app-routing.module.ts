import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './common/modules/layouts/wrapper/wrapper.component';
import {HomePageComponent} from './containers/home-page/home-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'app-home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
