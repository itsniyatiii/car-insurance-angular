import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent
{

  userFirstName: string ="";
  userLastName: string ="";
  userAadhar: string ="";
  userAge: number = 18;
  userCity: string ="";
  userMobile: string ="";
  userEmail: string ="";
  userUserName: string ="";
  userPassword: string ="";
  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
  registrationInProgress: boolean = false;

  constructor(private httpClient: HttpClient) {}

  save() {
    if (this.registrationInProgress) {
      // If registration is already in progress, prevent another registration attempt
      return;
    }
    this.registrationInProgress = true;

  
    let bodyData = {
      "userFirstName" : this.userFirstName,
      "userLastName" : this.userLastName,
      "userAadhar" : this.userAadhar,
      "userAge" : this.userAge,
      "userCity" : this.userCity,
      "userMobile" : this.userMobile,
      "userEmail" : this.userEmail,
      "userUserName" : this.userUserName,
      "userPassword" : this.userPassword
    };
    
    this.httpClient.post("http://localhost:8080/api/save/user", bodyData, { responseType: 'text' }).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert("User Registered Successfully");
        this.registrationInProgress = false; // Reset the flag after successful registration
      },
      (error) => {
        console.error("Error occurred during registration:", error);
        this.registrationInProgress = false; // Reset the flag in case of an error
      }
    );
  }
}