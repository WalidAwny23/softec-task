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
  isEditActive: boolean = false;
  selecterdProduct: Product | undefined = undefined;
  stockEditValue: number = 0;

  constructor(private productsService: ProductsService) {

  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.productsList$ = this.productsService.getProducts();
  }

  // activate edit product mode
  editStock(product: Product) {
    this.isEditActive = true;
    this.selecterdProduct = product;
    this.stockEditValue = this.selecterdProduct.AvailablePieces;
  }

  // save the edited product stock
  saveStock() {
    this.isEditActive = false;
    this.productsService.editProductQuantity(this.selecterdProduct!.ProductId, this.stockEditValue);
    this.selecterdProduct = undefined;
  }
}
