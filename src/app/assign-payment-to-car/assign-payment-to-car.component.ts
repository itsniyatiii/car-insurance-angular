import { Component, OnInit } from '@angular/core';
import { Paymentassignment } from '../paymentassignment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-payment-to-car',
  templateUrl: './assign-payment-to-car.component.html',
  styleUrls: ['./assign-payment-to-car.component.css']
})
export class AssignPaymentToCarComponent implements OnInit {
  paymentAssignment:Paymentassignment=new Paymentassignment();
  carId!:number;
  paymentId!:number;
  isLogIn=false;
  message!:String;

  constructor( private paymentService:PaymentService, private router:Router){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.paymentService.assignmentCar(this.carId, this.paymentId).subscribe(data=>
      {
        console.log(data);
        this.isLogIn=true;
        this.message="Payment assign to Car successful"!;
      },
      error=>console.log(error)
      );
  
  }

navigateToUserHome() {
  this.router.navigate(['/user-home']);
}
navigateToThanks()
 {
  this.router.navigate(['/thanks']);
 }
}
