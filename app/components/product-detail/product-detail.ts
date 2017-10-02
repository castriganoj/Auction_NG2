import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, Review, ProductService } from '../../services/product-service';

@Component({
  selector: 'auction-product-page',
  templateUrl: 'app/components/product-detail/product-detail.html'
})
export default class ProductDetailComponent {
  product: Product;
  reviews: Review[];

  constructor(route: ActivatedRoute, productService: ProductService){
    let prodID: number = parseInt(route.snapshot.params['productID']);

    this.product = productService.getProductById(prodID);
    this.reviews = productService.getReviewsForProduct(this.product.id);
  }
}
