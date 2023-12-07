// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component'; // Remova esta linha
import { ProductListModule } from './product-list/product-list.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FakeapiModule } from './fakeapi/fakeapi.module';
import { LoaderModule } from './loader/loader.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // outros componentes, diretivas, pipes
  ],
  imports: [
    CommonModule,
    FakeapiModule,
    ProductListModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    LoaderModule,
    // outros módulos necessários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
