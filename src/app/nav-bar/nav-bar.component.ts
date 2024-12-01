import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../Model/Categorie .mode';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule]
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;
  categories: Categorie[] = []; 

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.fetchCategories();

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Add',
        icon: 'pi pi-plus',
        items: [
          {
            label: 'Product',
            icon: 'pi pi-plus',
            routerLink: ['/product']
          },
          {
            label: 'Category',
            icon: 'pi pi-server',
            routerLink: ['/aff-category']
          },
          {
            label: 'User',
            icon: 'pi pi-user',
            routerLink: ['/add-user']
          }
        ]
      },
      {
        label: 'Category',
        icon: 'pi pi-search',
        items: this.categories.map(categorie => ({
          label: categorie.nom, // Category name
          icon: 'pi pi-tag',    // You can use a relevant icon here
          routerLink: [`/category/${categorie.id}`] // Use category ID in the URL
        }))
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: ['/contact']
      },
      {
        label: 'Panier',
        icon: 'pi pi-shopping-cart', // Icône de panier
        routerLink: ['/cart'] // Route vers la page du panier, assurez-vous que la route est définie
      }
    ];
  }

  // Fetch categories from backend API
  fetchCategories() {
    this.http.get<Categorie[]>('http://localhost:9094/api/categories/afficheTous').subscribe(
      (response) => {
        this.categories = response;
        console.log('Categories fetched:', this.categories);
        // After fetching categories, update the menu items dynamically
        this.updateMenuItems();
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  // Update menu items with dynamically fetched categories
  updateMenuItems() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Add',
        icon: 'pi pi-plus',
        items: [
          {
            label: 'Product',
            icon: 'pi pi-plus',
            routerLink: ['/product']
          },
          {
            label: 'Category',
            icon: 'pi pi-server',
            routerLink: ['/aff-category']
          },
          {
            label: 'Users',
            icon: 'pi pi-user',
            routerLink: ['/utilisateur']
          }
        ]
      },
      {
        label: 'Category',
        icon: 'pi pi-search',
        items: this.categories.map(categorie => ({
          label: categorie.nom, // Category name
          icon: 'pi pi-tag',    // You can use a relevant icon here
          routerLink: [`/products-by-category/${categorie.id}`]
        }))
      },
      
      {
        label: 'Panier',
        icon: 'pi pi-shopping-cart', // Icône de panier
        routerLink: ['/cart'] // Route vers la page du panier, assurez-vous que la route est définie
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: ['/contact'] 
      }
    ];
  }  
}
