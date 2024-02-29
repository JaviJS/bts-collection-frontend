import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { DashboardBandComponent } from './pages/dashboard-band/dashboard-band.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./pages/auth/auth.routes').then((m) => m.authRoutes),
    },
    {
        path: '',
        component: PrincipalComponent,
    },
    {
        path: ':band',
        loadChildren: () =>
            import('./pages/dashboard-band/dashboard-band.routes').then((m) => m.dashboardBandRoutes),
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];



