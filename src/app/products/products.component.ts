import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private heroService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.heroService.getProducts()
    .subscribe(products => this.products = products);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addProduct({ name } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.heroService.deleteProduct(product.id).subscribe();
  }

}
