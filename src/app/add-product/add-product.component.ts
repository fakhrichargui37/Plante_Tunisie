import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Categorie {
  id: number;
  nom: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  produit = {
<<<<<<< HEAD
=======
    code: '',
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
    nom: '',
    prix: null,
    quantite: null,
    description: '',
<<<<<<< HEAD
    categorie: null
  };

  categories: { label: string, value: Categorie }[] = [];
  selectedFile: File | null = null; // To store the selected file
=======
    image: '',
    categorie: null
  };

  // Define categories array with Categorie objects
  categories: { label: string, value: Categorie }[] = [];
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09

  constructor(private http: HttpClient, private router: Router) {
    this.fetchCategories();
  }

  // Fetch categories from backend API
  fetchCategories() {
    this.http.get<Categorie[]>('http://localhost:9094/api/categories/afficheTous').subscribe(
      (response) => {
<<<<<<< HEAD
        this.categories = response.map(categorie => ({
          label: categorie.nom,
          value: categorie
=======
        // Map response to the format required by the dropdown
        this.categories = response.map(categorie => ({
          label: categorie.nom,  // category name
          value: categorie        // full category object
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
        }));
        console.log('Categories fetched', this.categories);
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

<<<<<<< HEAD
  // Handle file selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', file);
    }
  }

  // Submit the form with the selected image
  submitForm() {
    if (!this.selectedFile) {
      alert('Please select an image before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('produit', new Blob([JSON.stringify(this.produit)], { type: 'application/json' }));
    formData.append('Imageile', this.selectedFile);

    console.log('Submitting product with image:', this.produit);

    this.http.post('http://localhost:9094/api/produits/ajoutProduit', formData).subscribe(
      (response) => {
        console.log('Product submitted:', response);
        this.router.navigate(['/product']);
      },
      (error) => {
        console.error('Error submitting product:', error);
        alert('Failed to submit product.');
=======
  submitForm() {
    console.log('Submitting product', this.produit);
    this.http.post('http://localhost:9094/api/produits/ajoutProduit', this.produit).subscribe(
      (response) => {
        console.log('Product Submitted', response);
        this.router.navigate(['/product']);
      },
      (error) => {
        console.error('Error submitting product', error);
        alert('Failed to submit product');
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
      }
    );
  }
}
