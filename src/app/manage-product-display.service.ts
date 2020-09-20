import { Products } from './products';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ManageProductDisplayService {
  product;
  constructor() { }
  changeProductDisplay(product)
  {
    this.product=product;
  }

}
