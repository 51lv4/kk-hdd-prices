import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kk-hdd-prices';
  product: string = '';
  constructor(private productService: ProductsService) { }
  fetchProduct(): void {
    this.productService.getProduct().subscribe((data: any) => {
      this.product = data.product;
    });
  }
}
