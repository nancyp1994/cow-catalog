import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@cow/cow-list').then((m) => m.CowList),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
