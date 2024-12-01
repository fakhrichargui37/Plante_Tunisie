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
