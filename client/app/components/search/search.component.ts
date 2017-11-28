import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'auction-search',
  templateUrl: 'app/components/search/search.component.html',
  providers: [ProductService]
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
      'category': [-1]
    })
  }

  onSearch(){
    if (this.formModel.valid){
      console.log(this.formModel.value);
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