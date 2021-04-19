import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCategoryDetailsComponent } from './product-category-details/product-category-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProducthomeComponent } from './producthome/producthome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryComponent,
    ProductCategoryListComponent,
    ProductCategoryDetailsComponent,
    ProducthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
