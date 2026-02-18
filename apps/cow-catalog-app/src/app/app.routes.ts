import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@cow/cow-list').then((m) => m.CowList),
  },
  {
    path: 'cow/:id',
    loadComponent: () => import('@cow/cow-detail').then((m) => m.CowDetail),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
