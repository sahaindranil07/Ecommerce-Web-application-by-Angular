import { Component } from '@angular/core';
import { signup } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  authError:string=" ";
  showLogin:boolean=true;
  constructor(private user:UserService) {
    this.user.userAuthReload();
    
  }


  signUp(data:signup){
    this.user.userSignUp(data);

  }
  login(data:signup){
    this.user.userLogin(data);
    console.log(data);
    if(data){
      this.user.invalidUserAuth.subscribe((result)=>{
        console.log("apple",result)
        if(result){
          this.authError="Enter valid user details";

        }
      })
    }

  }
  openLogin(){
    this.showLogin=true;

  }
  openSignUp(){
    this.showLogin=false;

  }

}
