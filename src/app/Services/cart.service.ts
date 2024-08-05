import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItem } from '../shared/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  defaultItem: cartItem[] = [];
  private messageSource = new BehaviorSubject(this.defaultItem);

  currentMessage: any = this.messageSource.asObservable();

  cartItems: cartItem[] = [];

  addItemToCart(newItem: cartItem) {
    let repeatedItem = false;

    this.cartItems.forEach((item) => {
      if (item.productId == newItem.productId) {
        repeatedItem = true;
        item.productQuantity += newItem.productQuantity;
        return;
      }
    });
    if (!repeatedItem) this.cartItems.push(newItem);
    this.messageSource.next(this.cartItems);
    console.log('added');
  }

  removeItemFromCart(itemId: number) {
    this.cartItems = this.cartItems.filter((item) => item.productId != itemId);
    this.messageSource.next(this.cartItems);
  }
}
