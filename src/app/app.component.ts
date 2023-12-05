import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from './products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  selectedOption: string = '';
  selectedOptionC: string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
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
      this.productsService.filterProducts(this.searchTerm, this.selectedOption ).subscribe(
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
