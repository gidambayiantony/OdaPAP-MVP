// home-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'order-details',
        loadChildren: () => import('./pages/order-details/order-details.module').then(m => m.OrderDetailsPageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
