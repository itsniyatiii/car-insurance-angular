import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createclaim',
  templateUrl: './createclaim.component.html',
  styleUrls: ['./createclaim.component.css']
})
export class CreateclaimComponent implements OnInit {
  // status=['Approved','Pending','Under Review','Denied','In Process','Closed'];
  claim:Claim=new Claim();

  constructor(private claimService: ClaimService,
    private router:Router){}
  ngOnInit(): void {
    this.claim.vin="1HGBH41JXMN109186";
    this.claim.claim_no='ABC123456789';
    this.claim.claim_amount=5000;
    this.claim.status="Pending";
    this.claim.issued_date=new Date();
  }
saveClaim(){
this.claimService.createClaim(this.claim).subscribe(data=>{
  console.log(data);
  this.goForAssign();
})
}

goForAssign()
{
this.router.navigate(['/assign-claim-to-insurancepolicy']);
}

  onSubmit()
  {
this.saveClaim();
  }

  navigateToUserHome() {
    this.router.navigate(['/user-home']);
  }
}
