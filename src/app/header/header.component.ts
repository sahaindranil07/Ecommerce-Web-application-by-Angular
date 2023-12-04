import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string='default';
  sellername:string=" ";
  userName:string=" ";
  searchResult:undefined|product[];
constructor(private route:Router,private seller:SellerService,private product:ProductService){

  this.route.events.subscribe((val:any)=>{
    if(val.url){
      if(localStorage.getItem('seller') && val.url.includes('seller')){
          let sellerstore=localStorage.getItem('seller');
          let sellerdata=sellerstore && JSON.parse(sellerstore)[0];
          this.sellername=sellerdata.name;
          this.menuType='seller';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';
          // this.product.getCartList(userData.id);
        }
      
      else{
        console.log("outside")
        this.menuType='default';
    }
    
    }

  })
  
}
logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['/'])

}
userLogout(){
  localStorage.removeItem('user');
  this.route.navigate(['/user-auth'])

}
searchProduct(querry:KeyboardEvent){
  if(querry){
    const element=querry.target as HTMLInputElement;  
    this.product.searchProducts(element.value).subscribe((result)=>{
      if(result){
        this.searchResult=result;
      }

    })
  }

}
hideSearch(){
  this.searchResult=undefined;
}
submitSearch(val:string){
  this.route.navigate([`search/${val}`])
}
redirectToDetails(id:number){
  this.route.navigate(['/details/'+id])
}
}
