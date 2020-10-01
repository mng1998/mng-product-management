/* Defines the product entity */
export interface Product {    
    id: number;
    productName: string;
    productCode?: string;
    description?: string;
    tags?: string[];
    releaseDate: string;
    price?: number;
    categoryId?: number;
    categoryName?: string;
    quantityInStock?: number;
    starRating: number;
    imageUrl: string;
    searchKey?: string[];
    supplierIds?: number[];
  }
  
  