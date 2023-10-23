import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { OrdersService } from 'src/app/core/services/orders.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { Order } from 'src/app/shared/models/Order.modal';
import { Product } from 'src/app/shared/models/Product.modal';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
  OrdersList$: Observable<Order[]> | undefined;

  constructor(private router: Router,
    private ordersService: OrdersService){

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.OrdersList$ = this.ordersService.getOrders();
    // ToDo matching the productId with the product obj to calculate total order amount 
  }

  openOrder(){
    this.router.navigate(['layout/orders/order-details/1']);
  }
}
