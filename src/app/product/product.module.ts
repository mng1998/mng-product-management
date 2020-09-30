import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductData } from './product-data';
import { ProductEditGuard } from './product-edit/product-edit.guard';

@NgModule({
  
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { path: 'productlist', component: ProductListComponent },
      { path: 'productdetail/:id', component: ProductDetailComponent },
      {
        path: 'productlist/:id/edit',
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
    
  ],
})
export class ProductModule { }