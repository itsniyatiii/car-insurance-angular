import { Component, OnInit } from '@angular/core';
import { Insurancepolicyassignment } from '../insurancepolicyassignment';
import { InsurancepolicyService } from '../insurancepolicy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-insurancepolicy-to-user',
  templateUrl: './assign-insurancepolicy-to-user.component.html',
  styleUrls: ['./assign-insurancepolicy-to-user.component.css']
})
export class AssignInsurancepolicyToUserComponent implements OnInit {

  Insurancepolicyassignment:Insurancepolicyassignment=new Insurancepolicyassignment();
  userId!:number;
  policyId!:number;
  isLogIn=false;
  message!:String;

  constructor( private insurancepolicyservice:InsurancepolicyService, private router:Router){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.insurancepolicyservice.assignmentUser(this.userId, this.policyId).subscribe(data=>
      {
        console.log(data);
        this.isLogIn=true;
        this.message="Insurancepolicy assign to user successful";
      },
      error=>console.log(error)
      );
  
  }
navigateToUserHome() {
  this.router.navigate(['/user-home']);
}

onProceed() {
  this.router.navigate(['/create-car']);
}
}

