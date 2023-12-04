import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  productmessage:undefined|string;
  constructor(private product:ProductService){}
  submit(data:product){
  this.product.addProduct(data).subscribe((result)=>{
    console.log(result);
 if(result){
  this.productmessage="product added successfully"

 }
 setTimeout(()=>{
  this.productmessage=undefined;

 },3000)
})

  }


}
