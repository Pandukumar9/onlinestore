import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from '../product-category';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  products:  ProductCategory[]=[];
  constructor(private prodctservice:ProductCategoryService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
    // this.products= [
    //   {
    //     "Id":1,
    //     "name":"pandu"
    //     // "lastName": "kumar",
    //     // "emailId": "pandu@gmail.com"
    //   },
    //   {
    //     "Id:2,
    //     "firstName":"sai"
    //     // "lastName": "sathis",
    //     // "emailId": "sai@gmail.com"
    //   }
    // ]
  }
  getProducts(){
    this.prodctservice.getProductList()
    .subscribe(data => this.products =data);

  }

  updateProduct(Id: any){
    this.router.navigate(['#', Id]);
  }
 
  // deleteEmployee(id: any){
  //   this.prodctservice.deleteEmployee(id)
  //   .subscribe( data => {
  //      console.log(data);
  //      this.getEmployees();
  //   });
  // }

  productDetails(Id: any){
    this.router.navigate(['employee_details', Id]);
  }
  page:number=0

   //sorting
  //  key: string = 'name'; //set default
  //  reverse: boolean = false;
  //  sort(key:any){
  //    this.key = key;
  //    this.reverse = !this.reverse;
  //  }
}
