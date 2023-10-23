import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  constructor(private router: Router){

  }

  openOrder(){
    this.router.navigate(['layout/orders/order-details/1']);
  }
}
