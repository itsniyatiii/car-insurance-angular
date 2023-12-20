import { Component, OnInit } from '@angular/core';
import { Claimassignment } from '../claimassignment';
import { Router } from '@angular/router';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-assign-claim-to-insurancepolicy',
  templateUrl: './assign-claim-to-insurancepolicy.component.html',
  styleUrls: ['./assign-claim-to-insurancepolicy.component.css']
})
export class AssignClaimToInsurancepolicyComponent implements OnInit {

  claimAssignment:Claimassignment=new Claimassignment();
  policyId!:number;
  claimId!:number;
  isLogIn=false;
  message!:String;

  constructor( private claimservice:ClaimService, private router:Router){}

  ngOnInit(): void {
      
  }

  onSubmit(){
    this.claimservice.assignmentInsurancepolicy(this.policyId, this.claimId).subscribe(data=>
      {
        console.log(data);
        this.isLogIn=true;
        this.message="Claim assign to insurancepolicy successful";
      },
      error=>console.log(error)
      );
  
  }
navigateToUserHome() {
  this.router.navigate(['/user-home']);
}
onProceed() {
  this.router.navigate(['/create-payment']);
}

}
