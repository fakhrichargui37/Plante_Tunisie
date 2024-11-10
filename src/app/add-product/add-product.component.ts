import { Component, Query } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    code: '',
    name: '',
    price: null,
    quantity: null,
    description: '',
    image: '',
    category: null
  };

  categories = [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Home Appliances', value: 'home-appliances' }
  ];

  submitForm() {
    console.log('Product Submitted', this.product);
    // Further processing of form submission
  }
}
