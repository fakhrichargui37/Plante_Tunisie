<<<<<<< HEAD
export interface Categorie {
  id: number;
  nom: string;
}

export interface Product {
  id: number;
  nom: string;
  description: string;
  prix: number;
  quantite: number;
  image: string;
  categorie_id: number;
  categorie: Categorie | null; // Ensure categorie is an object, not a string
}
=======
export class Product {
    id?: number;
    nom: string;
    description: string;
    prix: number;
    categorie: string;
    image: string;
    quantite: number;
    categorie_id: number;
  
    constructor(nom: string, description: string, prix: number, categorie: string, image: string, quantite: number, categorie_id: number) {
      this.nom = nom;
      this.description = description;
      this.prix = prix;
      this.categorie = categorie;
      this.image = image;
        this.quantite = quantite;
        this.categorie_id = categorie_id;
    }
  }
>>>>>>> 4e7d136948cb151297e8e852f214b8cee2f28a09
