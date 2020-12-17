import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      meta: {
        title: 'Admin',
        description: 'Admin page',
        override: true
      }
    }
  }
];
export const ContactsPageRoutes = RouterModule.forChild(routes);
