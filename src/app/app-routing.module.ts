import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  {path:'addproduct',component:ProductCategoryComponent},
  {path:'productlist',component:ProductCategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
