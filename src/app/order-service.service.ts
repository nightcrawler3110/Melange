import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  order:Object;
  constructor() {
    this.order={};
   }
  saveOrder(obj)
  {
    this.order=obj;
  }
}
