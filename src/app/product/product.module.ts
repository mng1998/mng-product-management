import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductEditGuard } from './product-edit/product-edit.guard';
import { ProductShellComponent } from './product-list-alt/product-shell.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
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
      { path: 'productalt', component: ProductShellComponent }
    ]),
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListAltComponent,
    ProductShellComponent,
    ProductDetailComponent    
  ],
})
export class ProductModule { }