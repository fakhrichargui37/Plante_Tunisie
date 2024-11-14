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
    code: '',
    nom: '',
    prix: null,
    quantite: null,
    description: '',
    image: '',
    categorie: null
  };

  // Define categories array with Categorie objects
  categories: { label: string, value: Categorie }[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.fetchCategories();
  }

  // Fetch categories from backend API
  fetchCategories() {
    this.http.get<Categorie[]>('http://localhost:9094/api/categories/afficheTous').subscribe(
      (response) => {
        // Map response to the format required by the dropdown
        this.categories = response.map(categorie => ({
          label: categorie.nom,  // category name
          value: categorie        // full category object
        }));
        console.log('Categories fetched', this.categories);
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

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
      }
    );
  }
}
