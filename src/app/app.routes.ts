import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'debounce-demo',
    loadComponent: () =>
      import('./features/debounce-demo/debounce-demo').then(
        (m) => m.DebounceDemo
      ),
  },
  {
    path:'duplicate-removal',
    loadComponent:()=>
    import('./features/duplicates-removal/duplicates-removal').then(
      (m)=>m.DuplicatesRemoval
    )
  },
  {
    path:'infinte-scroll',
    loadComponent:()=> import('./features/infinite-scroll/infinite-scroll').then(
      (m)=>m.InfiniteScroll
    )
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
