import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from '../product-category';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-product-category-details',
  templateUrl: './product-category-details.component.html',
  styleUrls: ['./product-category-details.component.css']
})
export class ProductCategoryDetailsComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute, private productct:ProductCategoryService) { }
   id:number=0;
   products = new ProductCategory();
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];

    this.productct.getProductById(this.id).subscribe(data => {
      this.products =data;
    });
  }

}
