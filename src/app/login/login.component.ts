import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  userEmail: string ="";
  userPassword: string ="";
  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
 


  constructor(private router: Router,private httpClient: HttpClient) {}
 


  Login() {
    console.log(this.userEmail);
    console.log(this.userPassword);
 
    let bodyData = {
      userEmail: this.userEmail,
      userPassword: this.userPassword,
    };
 
        this.httpClient.post("http://localhost:8080/api/login/user", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits")
 
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/user-home');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }

         });
    }
  }