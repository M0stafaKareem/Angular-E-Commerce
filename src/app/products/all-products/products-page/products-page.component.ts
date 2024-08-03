import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { dummyData } from '../../../shared/Products/products';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  products: any[] = dummyData;

  splitPrice(price: number): { decimal: number; whole: number } {
    let num = (price + '').split('.');
    return { whole: +num[0], decimal: +num[1] | 0 };
  }
}
