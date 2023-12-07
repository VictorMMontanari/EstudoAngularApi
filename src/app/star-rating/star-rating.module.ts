// product-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating.component';


@NgModule({
  declarations: [StarRatingComponent], // Certifique-se de incluir StarDirective nas declarações
  imports: [CommonModule],
  exports: [StarRatingComponent],
})
export class StarRatingtModule {}