import { Routes } from '@angular/router';
import { ShoppagePage } from './home/views/components/shoppage/shoppage.page';
import { AboutPageComponent } from './home/components/about-page/about-page.component';
import { ProductPageComponent } from './home/components/product-page/product-page.component';
import { AntotestComponent } from './home/components/antotest/antotest.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 
  {
    path: 'shoppage',
    component:ShoppagePage,
    // loadComponent: () => import('./home/views/components/shoppage/shoppage.page').then( m => m.ShoppagePage)
  },
  {
    path: 'test-page',
    loadComponent: () => import('./home/views/components/test-page/test-page.page').then( m => m.TestPagePage)
  },
  {
    path:'viewshop/:shopId',
    component: AboutPageComponent
  },
  {
    path:'viewproduct',
    component: ProductPageComponent
  },
  {
    path: 'antopage',
    loadComponent: () => import('./home/components/antopage/antopage.page').then( m => m.AntopagePage)
  },
  {
    path: 'cartpage',
    loadComponent: () => import('./home/components/cartpage/cartpage.page').then( m => m.CartpagePage)
  },
  {
    path: 'checkoutpage',
    loadComponent: () => import('./home/components/checkoutpage/checkoutpage.page').then( m => m.CheckoutpagePage)
  },
  {
    path: 'order-details',
    loadComponent: () => import('./home/components/order-details/order-details.page').then( m => m.OrderDetailsPage)
  },
{
  path:'antotest',
  component:AntotestComponent

},
  // {
  //   path: 'login',
  //   loadComponent: () => import('./home/components/login/login.page').then( m => m.LoginPage)
  // },
  {
    path: 'signup',
    loadComponent: () => import('./home/components/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'mwas',
    loadComponent: () => import('./home/components/mwas/mwas.page').then( m => m.MwasPage)
  }



  


];