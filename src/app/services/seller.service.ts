import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);

  constructor(private http:HttpClient,private route:Router) { }
  userSignUp(data:signup){
   this.http.post("http://localhost:3000/users",data,{observe:'response'}).subscribe((result)=>{
    if(result){
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.isUserLoggedIn.next(true);
      this.route.navigate(['seller-home'])
    }
   })

  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isUserLoggedIn.next(true);
      
      this.route.navigate(['seller-home'])
    }
  }
  userLogin(data:signup){
    return this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
    if(result && result.body && result.body.length){
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.route.navigate(['seller-home'])
      console.log("logged in")
     
    }
    else{
      console.log("logged out")
      this.isLoginError.emit(true);
    }
      


    })
  
  }

}
