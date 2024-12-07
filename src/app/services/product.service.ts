import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product.mode';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< HEAD
  updateProductWithFile(id: number, formData: FormData) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:9094/api/produits';

  constructor(private http: HttpClient) { }

  // Ajouter un produit
  public addProduct(nom: string, description: string, prix: number, categorie: number): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/ajoutProd`, {
=======

  constructor(private http: HttpClient) { }
  public addProduct(nom: string, description: string, prix: number, categorie: number): Observable<Product> {
    return this.http.post<Product>('http://localhost:9094/api/produits/ajoutProd', {
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
      nom,
      description,
      prix,
      categorie
    });
  }
<<<<<<< HEAD

  // Supprimer un produit par ID
  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/supprimer/${id}`);
  }

  // Mettre à jour un produit par ID
  public updateProduct(id: number, nom: string, description: string, prix: number, categorie: number): Observable<Product> {
    const url = `${this.baseUrl}/update/${id}`;
=======
  
  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:9094/api/produits/supprimer/' + id);
  }
  public updateProduct(id: number, nom: string, description: string, prix: number, categorie: number): Observable<Product> {
    // Ensure the URL is correct and data format is as expected
    const url = `http://localhost:9094/api/produits/update/${id}`;
    
    // Prepare the payload
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
    const payload = {
      nom,
      description,
      prix,
      categorie
    };
<<<<<<< HEAD
    return this.http.put<Product>(url, payload);
  }

  // Service Angular - ProductService
  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/affiche/${id}`);
  }

  // Obtenir tous les produits
  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/afficheTous`);
  }

  // Obtenir des produits par catégorie
  public getProductByCategory(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/byCat/${id}`);
  }

  // Obtenir l'image d'un produit par ID
  public getProductImage(productId: number | undefined): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/image/${productId}`, { responseType: 'blob' });
  }
  public addToCart(productId: number | undefined, userId: number): Observable<any> {
    const url = `http://localhost:9094/api/utilisateurs/addCart?idProduit=${productId}&idUtilisateur=${userId}`;
    return this.http.post<any>(url, {});
  }
  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/category/${categoryId}`);
=======
    
    // Use the PUT method with the URL and the payload
    return this.http.put<Product>(url, payload);
  }
  
  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('http://localhost:9094/api/produits/byId/' + id);
  }
  public getAllProducts(): Observable<Product[]> { 
    return this.http.get<Product[]>('http://localhost:9094/api/produits/afficheTous');
  }
  public getProductByCategory(id: number): Observable<Product[]> {  
    return this.http.get<Product[]>('http://localhost:9094/api/produits/byCat/' + id);
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
  }
}
