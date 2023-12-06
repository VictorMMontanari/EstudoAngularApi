import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Add this import
import { AppRoutingModule } from './app.routes';  // Add this import

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoaderComponent,
    NavbarComponent,
    // outros componentes, diretivas, pipes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,  // Add this line
    AppRoutingModule,  // Add this line
    // outros módulos necessários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
