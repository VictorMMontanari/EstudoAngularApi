import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../fakeapi/products.service';

@Component({
  selector: 'app-fakeapi',

  templateUrl: './fakeapi.component.html',
  styleUrls: ['./fakeapi.component.css'] // Corrija "styleUrl" para "styleUrls"
})
export class FakeapiComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  selectedOption: string = '';
  selectedOptionC: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        console.log(products)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterProducts(): void {
    if (!this.searchTerm) {
      this.productsService.filterProducts(this.searchTerm, this.selectedOption).subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.productsService.filterProducts(this.searchTerm, this.selectedOption).subscribe(
        (filteredProducts) => {
          this.products = filteredProducts;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
