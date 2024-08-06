import { Component, Input } from '@angular/core';
import { singleProduct } from '../../../shared/product.interface';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-prduct-details',
  standalone: true,
  imports: [],
  templateUrl: './prduct-details.component.html',
  styleUrl: './prduct-details.component.css',
})
export class PrductDetailsComponent {
  constructor(private cartService: CartService) {}

  @Input() productData!: singleProduct;

  mainPhoto: string = '';
  quantity: number = 1;

  ngOnInit() {
    this.mainPhoto = this.productData.images[0];
  }
  sidePhotoClickHandler = (url: string) => {
    const mainPhoto = document.querySelector('.mainImage');
    this.mainPhoto = url;
  };

  operationBtnHandler = (event: Event, op: string) => {
    event.preventDefault();
    if (op == '-' && this.quantity > 1) {
      this.quantity = this.quantity - 1;
    } else if (op == '+') {
      this.quantity = this.quantity + 1;
    }
  };
  addToCartHandler(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.cartService.addItemToCart({
      productCode: 'abcd',
      productId: this.productData.id,
      productImage: this.productData.images[0],
      productName: this.productData.title,
      productPrice: this.productData.price,
      productQuantity: this.quantity,
    });
  }
}
