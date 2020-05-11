import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from './about-page.component';

const routes: Routes = [
  {
    path: '', component: AboutPageComponent,
    data: {
      meta: {
        title: 'About',
        description: 'About page',
        override: true
      }
    }
  },
];

export const AboutPageRoutes = RouterModule.forChild(routes);
