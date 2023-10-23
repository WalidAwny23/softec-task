import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TotalPricePipe } from 'src/app/core/pipes/total-price.pipe';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailsComponent,
    TotalPricePipe
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
