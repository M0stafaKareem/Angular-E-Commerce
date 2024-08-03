import { Component, Input } from '@angular/core';
import { singleProduct } from '../../../shared/product.interface';
import { dummyData } from '../../../shared/Products/products';
import { PrductReviewsComponent } from '../prduct-reviews/prduct-reviews.component';
import { PrductDetailsComponent } from '../prduct-details/prduct-details.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [PrductReviewsComponent, PrductDetailsComponent],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css',
})
export class SingleProductPageComponent {
  constructor(private route: ActivatedRoute) {}

  id!: number;
  productData!: singleProduct;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.productData = dummyData[+this.id - 1];
  }
}
