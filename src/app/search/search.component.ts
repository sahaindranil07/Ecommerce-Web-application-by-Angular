import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchProduct:undefined|product[];
  constructor(private activeroute:ActivatedRoute,private product:ProductService) {
    
  let querry=this.activeroute.snapshot.paramMap.get('querry')
 querry && this.product.searchProducts(querry).subscribe((result)=>{
  this.searchProduct=result;
  })



  }

}
