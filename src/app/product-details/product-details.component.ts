import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productData:undefined|product;
  productQuantity:number=1;
  constructor(private activeroute:ActivatedRoute,private product:ProductService){
    let productId=this.activeroute.snapshot.paramMap.get('productId');
   productId && this.product.getProduct(productId).subscribe((result)=>{
    this.productData=result;
    })
  }
  handleQuantity(val:string){
    if(this.productQuantity<20 && val==="plus"){
      this.productQuantity+=1;

    }
    else if(this.productQuantity<20 && val==="minus"){
      this.productQuantity-=1;
    }
  }
}
