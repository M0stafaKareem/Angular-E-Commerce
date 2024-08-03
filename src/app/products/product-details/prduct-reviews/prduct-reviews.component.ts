import { Component, Input } from '@angular/core';
import { DescriptionComponent } from './description/description.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { ReviewsComponent } from './reviews/reviews.component';

@Component({
  selector: 'app-prduct-reviews',
  standalone: true,
  imports: [DescriptionComponent, NewReviewComponent, ReviewsComponent],
  templateUrl: './prduct-reviews.component.html',
  styleUrl: './prduct-reviews.component.css',
})
export class PrductReviewsComponent {
  @Input() prodRev: any;
  @Input() prodDesc: any;
  detailsMode: string = 'desc';

  changeDetailsMode(mode: string) {
    this.detailsMode = mode;
  }
}
