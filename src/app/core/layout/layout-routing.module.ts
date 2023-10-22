import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./../../feature_modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./../../feature_modules/orders/orders.module').then(m => m.OrdersModule)
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
