import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      meta: {
        title: 'Home',
        description: 'Home page',
        override: true
      }
    }
  },
];

export const HomePageRoutes = RouterModule.forChild(routes);
