import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'auction-search',
  templateUrl: './search.component.html',
})

export default class SearchComponent {
  categories: string[];
  formModel: FormGroup;

  constructor(private productService: ProductService) {
    this.categories = productService.getAllCategories();
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, positiveNumberValidator],
      'category': ['']
    })
  }

  onSearch() {
    if (this.formModel.valid) {
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }

}

function positiveNumberValidator(control: FormControl): any {
  if (!control.value) return null;
  const price = parseInt(control.value);
  return price === null ||
    typeof price === 'number' &&
    price > 0 ? null : { positivenumber: true };
}