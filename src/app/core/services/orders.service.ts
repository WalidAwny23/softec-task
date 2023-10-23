import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';
import { Order } from 'src/app/shared/models/Order.modal';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>("assets/db/orders.json");
  }

  //should return only 1 order but will handle it in the subscription for now
  getOrder(orderId: number): Observable<Order[]> {
    return this.http.get<Order[]>("assets/db/orders.json");
  }

  editProductQuantity(productId: number, quantity: number){
    //ToDo edit request here
  }
  
}
