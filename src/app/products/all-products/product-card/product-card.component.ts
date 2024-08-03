import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  constructor(private router: Router) {}

  @Input() productId: number = 11;
  @Input() productOldPrice!: number;
  @Input() productImg: string = '';
  @Input() productName: string = 'Product Name';
  @Input() productPrice!: number;

  ngOnInit() {
    this.productOldPrice = Math.floor(this.productOldPrice);
  }
  showSingleProduct() {
    this.router.navigate(['/all-products/', this.productId]);
  }
}
