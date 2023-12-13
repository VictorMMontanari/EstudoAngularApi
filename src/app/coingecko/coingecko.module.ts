import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { CoingeckoComponent } from './coingecko.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';



@NgModule({
    declarations: [CoingeckoComponent],
    imports: [ButtonModule, CommonModule, FormsModule, TableModule , BrowserModule, BrowserAnimationsModule],
  })
  export class CoingeckoModule {}
  