import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SingleProductPageComponent } from './products/product-details/single-product-page/single-product-page.component';
import { dummyData } from './shared/Products/products';
import { singleProduct } from './shared/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SingleProductPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'E-Commerce';
  products: singleProduct[] = dummyData;
}
