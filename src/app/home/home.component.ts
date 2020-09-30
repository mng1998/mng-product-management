import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle= "Top Products";
  imageWidth= 150;
  imageHeight= 150;
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() : void{
    //arr.slice(begin, end)
    this.productService.getProducts().subscribe(product => this.products = product.slice(1,5));
  }
}
