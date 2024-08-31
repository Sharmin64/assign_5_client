export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category?: string[];
  image?: string;
  stock?: number;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  selectedCategories: string[];
  sortOption: "asc" | "desc";
}

export interface Category {
  id: number;
  name: string;
  image: string;
}
