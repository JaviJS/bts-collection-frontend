import { Routes } from '@angular/router';
import { InfoBandComponent } from './info-band/info-band.component';
import { InfoAlbumsComponent } from './info-albums/info-albums.component';
import { InfoMembersComponent } from './info-members/info-members.component';
import { DashboardBandComponent } from './dashboard-band.component';

export const dashboardBandRoutes: Routes = [
  {
    path: '',
    component: DashboardBandComponent,
    children: [
      {
        path: '',
        component: InfoBandComponent,
      },
      {
        path: 'discografia',
        component: InfoAlbumsComponent,
      },
      {
        path: 'miembros',
        component: InfoMembersComponent,
      }
    ]
  },
];
