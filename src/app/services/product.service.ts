import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product.mode';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public addProduct(nom: string, description: string, prix: number, categorie: number): Observable<Product> {
    return this.http.post<Product>('http://localhost:9094/api/produits/ajoutProd', {
      nom,
      description,
      prix,
      categorie
    });
  }
  
  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:9094/api/produits/supprimer/' + id);
  }
  public updateProduct(id: number, nom: string, description: string, prix: number, categorie: number): Observable<Product> {
    // Ensure the URL is correct and data format is as expected
    const url = `http://localhost:9094/api/produits/update/${id}`;
    
    // Prepare the payload
    const payload = {
      nom,
      description,
      prix,
      categorie
    };
    
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
  }
}
