import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateclaim',
  templateUrl: './updateclaim.component.html',
  styleUrls: ['./updateclaim.component.css']
})
export class UpdateclaimComponent implements OnInit{
  status=['Approved','Pending','Under Review','Denied','In Process','Closed'];
  claim:Claim=new Claim();
  claimId!:number;

constructor(private claimService:ClaimService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.claimId=this.route.snapshot.params['claimId'];
   this.claimService.getClaimById(this.claimId).subscribe(data=>{
   this.claim =data;
   },
   error=>console.log(error));
  }


  onSubmit()
  {
this.claimService.updateClaim(this.claimId,this.claim).subscribe(data=>{
  console.log(data);
  this.goToclaimList();
},
error=>console.log(error));
  }

  goToclaimList()
  {
    this.router.navigate(['/get-claim']);
  }

  navigateToAdminHome() {
    this.router.navigate(['/admin-home']);
  }




}
