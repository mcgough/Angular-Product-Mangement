import { Component, OnInit, Input  } from '@angular/core';
import { store, submitProductReview } from '../../store';

import { IReview, IProduct } from '../product';

@Component({
  selector: 'pm-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  constructor() { }

  @Input() reviews: IReview[];
  @Input() product: IProduct; 
  formModalFlag: boolean = false;
  reviewForm: IReview;
  starRating: string;
  
  get productName(): string {
    return this.product.productName;
  }
  get productId(): number {
    return this.product.productId;
  }

  ngOnInit() {
    const { productName, productId } = this.product;
    this.setReviewForm();
  }

  setReviewForm(): void {
    this.reviewForm = Object.assign({}, this.reviewForm, {
      date: new Date(),
      body: '',
      starRating: '1',
      product: this.productId,
    })
  }
  handleClick(): void {
    this.formModalFlag = true;
  }
  handleReviewSubmit(): void {
    const review = Object.assign({}, this.reviewForm);
    if (review.body !== '') {
      store.dispatch(submitProductReview(review));
      this.formModalFlag = false;
      this.setReviewForm();
    }
  } 
}

