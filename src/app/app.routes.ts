import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
  {
    path: 'productos',
    title: 'Productos',
    component: ProductsComponent,
  },
  {
    path: 'producto/:id',
    title: 'Producto',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component'),
  },
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/productos',
  },
];
