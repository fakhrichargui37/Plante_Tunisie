import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
<<<<<<< HEAD
import {Product} from "../Model/Product.mode";
=======
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.products.forEach(product => {
          this.loadProductImage(product);
        });
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  loadProductImage(product: Product): void {
    this.productService.getProductImage(product.id).subscribe(
      (imageData: Blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          product.image = reader.result as string;
        };
        reader.readAsDataURL(imageData);
      },
      (error) => {
        console.error('Error loading product image:', error);
      }
    );
  }
}

/**@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
=======
  products: any[] = [];  
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        console.log('Products fetched', data);
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
<<<<<<< HEAD
}**/
=======
}
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
