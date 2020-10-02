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
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';

@NgModule({
  
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'productlist', component: ProductListComponent },
      { path: 'productdetail/:id', component: ProductDetailComponent },
      
      {
        path: 'productlist/:id/edit',
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent
      },
      { path: 'productalt', component: ProductListAltComponent }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListAltComponent
    
  ],
})
export class ProductModule { }