import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./deployment-dashboard/deployment-dashboard.component').then(
        (m) => m.DeploymentDashboardComponent
      ),
  },
  {
    path: 'upgrade-management',
    loadChildren: () =>
      import('./upgrade-management/upgrade-management.routes').then(
        (m) => m.upgradeManagementRoutes
      ),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'rollback',
    loadChildren: () =>
      import('./rollback/rollback.routes').then(
        (m) => m.rollbackRoutes
      ),
  },
  {
    path: 'upgrade-history',
    loadComponent: () => import('./upgrade-history/upgrade-history.component').then(m => m.UpgradeHistoryComponent),
  },
  {
    path: 'reporting',
    loadComponent: () => import('./reporting/reporting.component').then(m => m.ReportingComponent),
  },
  {
    path: 'user-management',
    loadComponent: () => import('./user-management/user-management.component').then(m => m.UserManagementComponent),
  },
  { path: '', component: HomeComponent }
];
