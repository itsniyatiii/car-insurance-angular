import { Component, OnInit } from '@angular/core';
import { Carassignment } from '../carassignment';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-car-to-insurancepolicy',
  templateUrl: './assign-car-to-insurancepolicy.component.html',
  styleUrls: ['./assign-car-to-insurancepolicy.component.css']
})
export class AssignCarToInsurancepolicyComponent implements OnInit{
  carAssignment:Carassignment=new Carassignment();
  policyId!:number;
  carId!:number;
  isLogIn=false;
  message!:String;

  constructor( private carService:CarService, private router:Router){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.carService.assignmentInsurancepolicy(this.policyId, this.carId).subscribe(data=>
      {
        console.log(data);
        this.isLogIn=true;
        this.message="Car assign to Insurancepolicy successfully";
        // this.router.navigate(['/createpayment']);
      },
      error=>console.log(error)
      );
  
  }
onProceed() {
  this.router.navigate(['/create-payment']);
}

navigateToUserHome() {
  this.router.navigate(['/user-home']);
}

}

