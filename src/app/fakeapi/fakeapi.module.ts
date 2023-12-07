import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importe o CommonModule
import { FormsModule } from '@angular/forms';
import { FakeapiComponent } from './fakeapi.component';
import { ProductListModule } from '../product-list/product-list.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
    declarations: [FakeapiComponent],
    imports: [CommonModule, FormsModule, ProductListModule, LoaderModule],
  })
  export class FakeapiModule {}
  
