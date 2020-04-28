import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './common/modules/layouts/wrapper/wrapper.component';
import {MetaGuard} from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '', component: WrapperComponent, canActivateChild: [MetaGuard], children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./container/home-page/home-page.module').then(m => m.HomePageModule)}
    ]
  }
];

export const AppRoutes = RouterModule.forRoot(routes, {initialNavigation: 'enabled', paramsInheritanceStrategy: 'always'});
