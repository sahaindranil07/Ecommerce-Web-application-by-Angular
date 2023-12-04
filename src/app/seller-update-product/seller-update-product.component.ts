import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  productList:undefined|product;
  productMessage:undefined|string;
  constructor(private product:ProductService,private route:ActivatedRoute){
    let productId=this.route.snapshot.paramMap.get('id');
    productId && this.product.getProduct(productId).subscribe((result)=>{
       if(result){
         this.productList=result;
       }
 
     })
  }

  submit(data:product){
    if(this.productList){
      data.id=this.productList.id;
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="product updated";
      }

    })
    setTimeout(() => {
      this.productMessage=undefined;
      
    }, 3000);
 

  }
  
}
