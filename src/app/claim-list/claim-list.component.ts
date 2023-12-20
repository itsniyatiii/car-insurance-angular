import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {
  claims: Claim[] | undefined;

constructor(private claimService: ClaimService,
  private router: Router){}
  ngOnInit(): void {
    this.getClaimList();
  }

private getClaimList()
{
  this.claimService.getAllClaimList().subscribe(data=>{
    this.claims=data;
  });
}
updateClaim(claimId:number)
{
this.router.navigate(['update-claim',claimId]);
}
deleteClaim(claimId:number)
{
this.claimService.deleteClaim(claimId).subscribe(data=>{
  console.log(data);
  this.reloadComponent();
},
error=>console.log(error));
}

reloadComponent() {
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['/get-claim']);
}

navigateToAdminHome() {
  this.router.navigate(['/admin-home']);
}


}



