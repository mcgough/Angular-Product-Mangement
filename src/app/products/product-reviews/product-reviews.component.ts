import { Component, OnInit, Input } from '@angular/core';
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
  emptyStars: NodeListOf<Element>;
  
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
  handleStarMouseEnter(num: number) {
    let i = 0;
    for (i; i <= num; i++) {
      this.emptyStars[i].className = 'glyphicon glyphicon-star';
    }
  }
  handleStarMouseLeave() {
    let i = 0;
    let length = this.emptyStars.length;
    for (i; i <= length; i++) {
      this.emptyStars[i].className = 'glyphicon glyphicon-star-empty';
    }
  }
  handleClick(): void {
    this.formModalFlag = true;
    setTimeout(() => {
      this.emptyStars = document.querySelectorAll('.glyphicon-star-empty');
    }, 500)
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

