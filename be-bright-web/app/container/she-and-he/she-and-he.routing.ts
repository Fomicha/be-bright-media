import {RouterModule, Routes} from '@angular/router';
import {SheAndHeComponent} from './she-and-he.component';

const routes: Routes = [
  {
    path: '',
    component: SheAndHeComponent,
    data: {
      meta: {
        title: 'She and He',
        description: 'She and He',
        override: true
      }
    }
  }
];
export const SheAndHeRoutes = RouterModule.forChild(routes);
