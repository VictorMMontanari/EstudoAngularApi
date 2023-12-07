// product-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistComponent } from './pokelist.component';
import { StarRatingtModule } from '../star-rating/star-rating.module';

@NgModule({
    declarations: [PokelistComponent],
    imports: [CommonModule],
    exports: [PokelistComponent],
  })
  export class PokeListModule {}