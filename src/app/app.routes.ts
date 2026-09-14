import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: 'personal-portfolio',
    component: App,
  },
  {
    path: '**',
    redirectTo: 'personal-portfolio',
  },
];
