import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/shared/models/Product.modal';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsList$: Observable<Product[]> | undefined;
  constructor(private productsService: ProductsService) {

  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productsList$ = this.productsService.getProducts();
  }
}
