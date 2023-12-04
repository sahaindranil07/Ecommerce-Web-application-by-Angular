import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { signup } from '../data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  invalidUserAuth=new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,private route:Router) { }
  userSignUp(user:signup){
     this.http.post("http://localhost:3000/users",user,{observe:'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body)); 
        this.route.navigate(['/'])
      }

    })

  }
  userLogin(data:signup){
    this.http.get<signup[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));   
        this.route.navigate(['/']);
        this.invalidUserAuth.emit(false);

      }
      else{
        this.invalidUserAuth.emit(true);

      }
    })

  }
  userAuthReload(){
    if(localStorage.getItem('user')){
      this.route.navigate(['/'])
    }
  }

}
