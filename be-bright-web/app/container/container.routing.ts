import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from './container.component';
import {NgModule} from '@angular/core';
import { HomePageComponent } from './modules/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRouter {
}
