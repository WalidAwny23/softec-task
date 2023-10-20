import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/Product.modal';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/db/porducts.json");
  }

  editProductQuantity(productId: number, quantity: number){
    //ToDo edit request here
  }
}
