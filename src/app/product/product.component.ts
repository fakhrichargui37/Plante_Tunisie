import { Component,OnInit } from '@angular/core';
import { Product } from '../Model/Product.mode';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
<<<<<<< HEAD
export class ProductComponent implements OnInit {
=======
export class ProductComponent implements OnInit{
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
<<<<<<< HEAD
      this.products.forEach(product => {
        this.loadProductImage(product);
      });
    });
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
        alert('Error loading product image:'+ error);
      }
    );
  }

=======
    });
  }
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
  deleteProduct(product: Product): void {
    if (product.id !== undefined && product.id !== null) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.productService.deleteProduct(product.id).subscribe(
<<<<<<< HEAD
          (response: any) => {
            this.products = this.products.filter(p => p.id !== product.id);
            alert('Product deleted successfully');
          },
          (error) => {
            alert('Error deleting product:'+ error);
=======
          () => {
            this.products = this.products.filter(p => p.id !== product.id);
            console.log('Product deleted successfully');
          },
          (error) => {
            console.error('Error deleting product:', error);
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
          }
        );
      }
    } else {
<<<<<<< HEAD
      alert('Product ID is undefined');
    }
  }
=======
      console.error('Product ID is undefined');
    }
  }
  
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
}
