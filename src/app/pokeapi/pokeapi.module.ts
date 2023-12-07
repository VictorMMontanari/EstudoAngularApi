import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importe o CommonModule
import { FormsModule } from '@angular/forms';
import { PokeapiComponent } from './pokeapi.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
    declarations: [PokeapiComponent],
    imports: [CommonModule, FormsModule, LoaderModule],
  })
  export class PokeapiModule {}
  
