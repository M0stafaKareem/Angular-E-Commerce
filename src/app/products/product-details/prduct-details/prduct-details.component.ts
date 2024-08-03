import { Component, Input } from '@angular/core';
import { singleProduct } from '../../../shared/product.interface';

@Component({
  selector: 'app-prduct-details',
  standalone: true,
  imports: [],
  templateUrl: './prduct-details.component.html',
  styleUrl: './prduct-details.component.css',
})
export class PrductDetailsComponent {
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
}
