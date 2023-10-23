import { Pipe, PipeTransform } from '@angular/core';
import { OrderProduct } from 'src/app/shared/models/Order.modal';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(array: OrderProduct[]): any {
    return array.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.Quantity * currentValue.Product?.ProductPrice);
    }, 0);
  }

}
