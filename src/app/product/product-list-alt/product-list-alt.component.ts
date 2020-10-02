import { Component, OnInit } from '@angular/core';
import { EMPTY, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-list-alt',
  templateUrl: './product-list-alt.component.html',
  styleUrls: ['./product-list-alt.component.css']
})
export class ProductListAltComponent {

  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId: number;

  products$ = this.productService.productsWithCategory$
  .pipe(
    catchError(err =>{
      this.errorMessage =err;
      //return of([]);
      return EMPTY;
    })
  );
  
  //selectedProduct$ = this.productService.selectedProduct$;

  constructor(private productService: ProductService) { }
  
  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
