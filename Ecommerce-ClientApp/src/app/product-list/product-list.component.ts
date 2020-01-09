import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.models';
import { PRODUCTS } from 'src/models/products-list';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

title = 'Product List';
productsList: Product[];
  constructor() { }

  ngOnInit() {
  this.productsList = PRODUCTS;
  }

}
