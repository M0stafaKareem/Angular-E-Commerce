import { Component } from '@angular/core';
import { cartItem } from '../shared/cart.interface';
import { CartService } from '../Services/cart.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  subTotal: number = 0;
  tax: number = 0;

  constructor(private cartService: CartService) {}
  cartItems: cartItem[] = [];

  ngOnInit(): void {
    this.cartService.currentMessage.subscribe((items: cartItem[]) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.subTotal = 0;
    this.cartService.cartItems.forEach(
      (item: any) =>
        (this.subTotal = Math.round(
          this.subTotal + item.productPrice * item.productQuantity
        ))
    );
    this.tax = Math.round(this.subTotal * 0.14);
  }

  removeItemFromCart(itemId: number) {
    this.cartService.removeItemFromCart(itemId);
    this.calculateTotal();
  }
}
