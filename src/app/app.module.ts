// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ProductListModule } from './product-list/product-list.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FakeapiModule } from './fakeapi/fakeapi.module';
import { LoaderModule } from './loader/loader.module';
import { StarRatingtModule } from './star-rating/star-rating.module';
import { PokeapiModule } from './pokeapi/pokeapi.module';
import { PokeListModule } from './pokelist/pokelist.module';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // outros componentes, diretivas, pipes
  ],
  imports: [
    NgxPaginationModule,
    StarRatingtModule,
    CommonModule,
    FakeapiModule,
    PokeapiModule,
    ProductListModule,
    PokeListModule,
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
