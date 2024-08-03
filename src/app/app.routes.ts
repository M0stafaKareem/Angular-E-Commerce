import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products/all-products/products-page/products-page.component';
import { SingleProductPageComponent } from './products/product-details/single-product-page/single-product-page.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
  },
  {
    path: 'all-products/:id',
    component: SingleProductPageComponent,
  },

  {
    path: 'login',
    component: AuthenticationPageComponent,
  },
  {
    path: 'register',
    component: AuthenticationPageComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
];
