// product-list.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistComponent } from './pokelist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [PokelistComponent],
    imports: [CommonModule, HttpClientModule],
    exports: [PokelistComponent],
  })
  export class PokeListModule {}