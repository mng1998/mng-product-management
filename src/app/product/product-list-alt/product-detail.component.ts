import { ChangeDetectionStrategy, Component } from "@angular/core";
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-list-alt.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })

  export class ProductDetailComponent{
  detailTitle = 'Product Detail';
  errorMessage='';

  productDetail$ = this.productService.selectedProduct$
  .pipe(
    catchError(err => {
      this.errorMessage= err;
      return EMPTY;
    })
  );
  
  productSupliers$ = this.productService.selectedProductSupplier$
  .pipe(
    catchError(err => {
      this.errorMessage= err;
      return EMPTY;
    })
  );
  

  constructor (private productService: ProductService) {}
  }