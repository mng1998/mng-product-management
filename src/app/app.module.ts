import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductComponent } from './product/product.component';
import { TestComponent } from './test/test.component'
import { ProductModule } from './product/product.module';
import { ProductData } from './product/product-data';
//import { ProductListComponent} from './product/product-list/product-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ProductComponent,
    TestComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ProductData, { dataEncapsulation: false }
    ),
    ProductModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
