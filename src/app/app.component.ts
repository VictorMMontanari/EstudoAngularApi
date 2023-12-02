import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (products) => {
        console.log(products); // Adicione este log para verificar os dados
        this.products = products;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
