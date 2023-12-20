import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminEmail: string ="";
  adminPassword: string ="";


  constructor(private router: Router,private httpClient: HttpClient) {}
 


  Login() {
    console.log(this.adminEmail);
    console.log(this.adminPassword);
 
    let bodyData = {
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
    };
 
        this.httpClient.post("http://localhost:8080/api/login/admin", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
 
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/admin-home');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }

      });
    }


}
