import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service'; // Ensure correct import path
import { Product } from '../Model/Product.mode';
import { NavBarComponent } from "../nav-bar/nav-bar.component"; // Ensure correct import path

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css'],
})
export class ProductsByCategoryComponent implements OnInit {
  categoryId!: number;
  products: Product[] = [];
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Get the category ID from the route
    this.route.params.subscribe(params => {
      this.categoryId = +params['id']; // Convert to number
      this.fetchProductsByCategory(this.categoryId);
    });
  }

  fetchProductsByCategory(categoryId: number) {
    // Set isLoading to true to show loading state while fetching data
    this.isLoading = true;

    this.productService.getProductsByCategory(categoryId).subscribe(
      (response) => {
        this.products = response;
        console.log('Products for category:', response);
        this.isLoading = false; // Set isLoading to false after data is fetched
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false; // Set isLoading to false if there's an error
      }
    );
  }
}
