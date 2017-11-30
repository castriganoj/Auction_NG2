import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Review, ProductService } from '../../services/product.service';
import StarsComponent from '../stars/stars.component';

import { Observable } from 'rxjs/observable';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'auction-product-page',
  styles: ['auction-stars.large {font-size: 24px;}'],
  templateUrl: 'app/components/product-detail/product-detail.component.html'
})
export default class ProductDetailComponent {
  productId: number;
  product: Product;
  reviews: Review[];

  newComment: string;
  newRating: number;

  isReviewHidden: boolean = true;

  private subscription: Subscription;

  constructor(route: ActivatedRoute, private productService: ProductService) {
    this.productId = parseInt(route.snapshot.params['productId']);


  }

  ngOnInit() {
    this.productService
      .getProductById(this.productId)
      .subscribe(
      product => {
        this.product = product;
      },
      error => console.error(error));

      this.productService
      .getReviewsForProduct(this.productId)
      .subscribe(
        reviews => this.reviews = reviews,
        error => console.error(error));
  }

  addReview() {
    let review = new Review(0, this.product.id, new Date(), 'Anonymous',
      this.newRating, this.newComment);
    console.log("Adding review " + JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}