import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProducts:undefined|product[];
  trendyProduct:undefined|product[];
  constructor(private product:ProductService){
    this.product.popularProducts().subscribe((result)=>{
      if(result){
        this.popularProducts=result;
      }

    })
    this.product.trendyProducts().subscribe((result)=>{
      this.trendyProduct=result;

    })
  }

}
