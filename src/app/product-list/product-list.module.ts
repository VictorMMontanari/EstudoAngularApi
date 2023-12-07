// product-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { StarRatingtModule } from '../star-rating/star-rating.module';

@NgModule({
    declarations: [ProductListComponent],
    imports: [CommonModule, StarRatingtModule],
    exports: [ProductListComponent],
  })
  export class ProductListModule {}