import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importe o CommonModule
import { FormsModule } from '@angular/forms';
import { PokeapiComponent } from './pokeapi.component';
import { LoaderModule } from '../loader/loader.module';
import { PokeListModule } from '../pokelist/pokelist.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    declarations: [PokeapiComponent],
    imports: [CommonModule, FormsModule, PokeListModule, LoaderModule, NgxPaginationModule],
  })
  export class PokeapiModule {}
  
