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
      starRating: 1,
      product: this.productId,
    })
  }
  handleStarClick(num: number): void {
    this.reviewForm = Object.assign({}, this.reviewForm, {
      starRating: num,
    });
  }
  handleStarMouseEnter(num: number): void {
    this.reviewForm = Object.assign({}, this.reviewForm, {
      starRating: 1,
    });
    for (let i = 0; i < num; i++) {
      this.emptyStars[i].className = 'glyphicon glyphicon-star whole';
    }
  }
  handleStarMouseLeave(): void {
    for (let i = 0; i <= this.emptyStars.length; i++) {
      if (i >= this.reviewForm.starRating) {
        if (this.emptyStars[i] !== undefined) {
          this.emptyStars[i].className = 'glyphicon glyphicon-star';
        }
      }
    }
  }
  handleClick(): void {
    this.formModalFlag = true;
    setTimeout(() => {
      this.emptyStars = document.querySelectorAll('.form-modal-container .glyphicon');
    }, 100)
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

