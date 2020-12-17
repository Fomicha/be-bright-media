import {RouterModule, Routes} from '@angular/router';
import {ContactsPageComponent} from './contacts-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsPageComponent,
    data: {
      meta: {
        title: 'Contacts',
        description: 'Contacts page',
        override: true
      }
    }
  }
];
export const ContactsPageRoutes = RouterModule.forChild(routes);
