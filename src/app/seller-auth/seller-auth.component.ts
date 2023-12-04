import { Component } from '@angular/core';
import { signup } from '../data-type';
import { SellerService } from '../services/seller.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showlogin=true;
  authError:string="";
  constructor(private seller:SellerService,private route:Router){
    this.seller.reloadSeller();
  }

  signup(data:signup){
    console.log(data)
    this.seller.userSignUp(data)

  }
  login(data:signup){
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="login failed"
      }

    })
    




  }
  openlogin(){
    this.showlogin=true;

  }
  opensignup(){
    this.showlogin=false


  }

}
