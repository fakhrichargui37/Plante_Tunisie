import {Component, OnInit} from '@angular/core';
import {Product} from "../Model/Product.mode";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {UtilisateurService} from "../services/utilisateur.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  userEmail: string | null = null; // Variable pour stocker l'email
  userId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('userEmail');
    this.userId = localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null;
  
    if (!this.userEmail || !this.userId) {
      console.error('No user information found in localStorage');
      // Optional: redirect to login if necessary
      this.router.navigate(['/login']);
    }
    // Récupère l'ID du produit depuis l'URL
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId) {
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
        // Si nécessaire, chargez l'image du produit ici
        this.loadProductImage(this.product);
      });
    }

    // Récupérer l'email de l'utilisateur depuis localStorage ou via un service
    this.userEmail = localStorage.getItem('userEmail');

    if (this.userEmail) {
      this.utilisateurService.getUserByEmail(this.userEmail).subscribe(
        (user) => {
          this.userId = user.id;  // Stocke l'ID de l'utilisateur
        },
        (error) => {
          console.error('Erreur lors de la récupération de l\'utilisateur:', error);
        }
      );
    } else {
      console.error('Aucun utilisateur connecté');
    }
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

  // Méthode pour ajouter un produit au panier
  addToCart(): void {
    // Vérifie si l'utilisateur est connecté
    if (!this.userEmail) {
      alert('Veuillez vous connecter pour ajouter un produit au panier.');
      this.router.navigate(['/login']); // Redirige l'utilisateur vers la page de connexion
      return; // Arrête l'exécution
    }
  
    // Vérifie si le produit et l'utilisateur existent
    if (this.product && this.userId) {
      this.productService.addToCart(this.product.id, this.userId).subscribe(
        (response) => {
          console.log('Produit ajouté au panier avec succès:', response);
          alert('Produit ajouté au panier avec succès !');
        },
        (error) => {
          console.error('Erreur lors de l\'ajout au panier:', error);
          alert('Une erreur est survenue lors de l\'ajout au panier. Veuillez réessayer.');
        }
      );
    } else {
      // Message d'erreur explicite si le produit ou l'utilisateur est introuvable
      alert('Impossible de trouver le produit ou l\'utilisateur. Veuillez réessayer.');
    }
  }
  

  // Méthode pour naviguer vers la page d'accueil
  continueShopping(): void {
    this.router.navigate(['/home']);
  }
}
