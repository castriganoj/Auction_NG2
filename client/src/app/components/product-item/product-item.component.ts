import {Component, Input} from '@angular/core';
import {Product} from '../../services/product.service';

@Component({
  selector: 'auction-product-item',
  styleUrls: ['./product-item.component.css'],
  templateUrl: './product-item.component.html',
})
export default class ProductItemComponent {
  @Input() product: Product;
}
