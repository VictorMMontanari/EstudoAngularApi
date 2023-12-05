import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
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
    [FormsModule],// Adicione esta linha
    // outros módulos necessários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
