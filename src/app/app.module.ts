import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    // outros componentes, diretivas, pipes
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule, // Adicione esta linha
    // outros módulos necessários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
