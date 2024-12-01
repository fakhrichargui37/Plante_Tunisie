import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../Model/Product.mode';
import { Categorie } from '../Model/Categorie .mode';
import { HttpClient } from '@angular/common/http';  // Import HttpClient

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = {
    id: 0,
    nom: '',
    description: '',
    prix: 0,
    quantite: 0,
    image: '',
    categorie_id: 0, // Use categorie_id to bind category
    categorie: null  // Ensure categorie is an object, not a string
  };

  categories: Categorie[] = []; // To store categories fetched from the server

  selectedFile: File | null = null; 

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient  // Inject HttpClient to fetch categories
  ) {}

  ngOnInit(): void {
    const productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    
    // Fetch product by ID
    this.productService.getProductById(productId).subscribe(
      (data: Product) => {
        this.product = {
          ...data,
          categorie_id: data.categorie_id ?? 0
        };
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );

    // Fetch categories for the dropdown
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get<Categorie[]>('http://localhost:9094/api/categories/afficheTous').subscribe(
      (response) => {
        this.categories = response;
         console.log('Categories fetched', this.categories);
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }
  
  

  // Handle file selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', file);
    }
  }

  // Update product method
  updateProduct(): void {
    if (this.product.id === undefined || this.product.id === 0) {
      console.error('Product ID is invalid');
      alert('Invalid product ID');
      return;
    }

    const formData = new FormData();
    formData.append('produit', new Blob([JSON.stringify(this.product)], { type: 'application/json' }));

    if (this.selectedFile) {
      formData.append('Imagefile', this.selectedFile);
    }

    // Call the product service with FormData
    this.productService.updateProduct(
      this.product.id,
      this.product.nom,
      this.product.description,
      this.product.prix,
      this.product.categorie_id
    ).subscribe(
      (response) => {
        console.log('Product updated successfully:', response);
        alert('Product updated successfully.');
        this.router.navigate(['/product']);
      },
      (error) => {
        console.error('Error updating product:', error);
        alert('Failed to update product.');
      }
    );
  }
}
