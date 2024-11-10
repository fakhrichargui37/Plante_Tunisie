import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category = {
    name: '',
    description: ''
  };

  submitCategory() {
    if (this.category.name && this.category.description) {
      console.log('Category added:', this.category);
      // Further processing, e.g., saving the category to the database
    } else {
      console.log('Please fill in both the category name and description');
    }
  }
}
