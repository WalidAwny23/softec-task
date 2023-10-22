import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/Product.modal';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input("data") data: Product | undefined;
  @Output("save") saveEvent = new EventEmitter();

  isEditActive: boolean = false;
  stockEditValue: number = 0;

  constructor(){

  }
  ngOnChanges(){
    
  }

   // activate edit product mode
   editStock() {
    this.isEditActive = true;
    this.stockEditValue = this.data!.AvailablePieces;
  }

  // save the edited product stock
  saveStock() {
    this.isEditActive = false;
    this.saveEvent.emit(this.stockEditValue);
  }
}
