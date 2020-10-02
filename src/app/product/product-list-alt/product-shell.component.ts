import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
    templateUrl: './product-shell.component.html',
    styleUrls: ['./product-list-alt.component.css'],
})
export class ProductShellComponent {
  detailTitle = 'Product Detail: ';
  errorMessage='';
  name= "Name";
  code= "Code";
  description= "Description";
  realseDate= "Availability";
  price= "Price";
  rate= "Rating";
  tags="Tags";

  productDetail$ = this.productService.selectedProduct$
  .pipe(
    catchError(err => {
      this.errorMessage= err;
      return EMPTY;
    })
  );

  productSuppliers$ = this.productService.selectedProductSuppliers$
  .pipe(
    catchError(err => {
      this.errorMessage= err;
      return EMPTY;
    })
  );
  
  
  constructor (private productService: ProductService) {}
}
