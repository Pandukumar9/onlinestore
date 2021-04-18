import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from '../product-category';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor(private productService:ProductCategoryService,private router:Router) { }

   productct: ProductCategory = new ProductCategory();

  ngOnInit(): void {
  }
  saveEmployee(){
    this.productService.createEmployee(this.productct)
    .subscribe(data => {
      console.log(data);
      this.getProductList();
      this.productct = new ProductCategory();
      alert("Successfully Submited.");
      
    })
  }
  getProductList() {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    console.log(this.productct);
    this.saveEmployee();
  }
}
