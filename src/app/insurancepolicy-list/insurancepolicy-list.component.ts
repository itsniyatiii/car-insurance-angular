import { Component, OnInit } from '@angular/core';
import { Insurancepolicy } from '../insurancepolicy';
import { InsurancepolicyService } from '../insurancepolicy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insurancepolicy-list',
  templateUrl: './insurancepolicy-list.component.html',
  styleUrls: ['./insurancepolicy-list.component.css']
})
export class InsurancepolicyListComponent implements OnInit {

  insurancepolicies: Insurancepolicy[] | undefined;

constructor(private insurancepolicyService: InsurancepolicyService,
  private router: Router){}
  ngOnInit(): void {
    this.getInsurancepolicyList();
  }

private getInsurancepolicyList()
{
  this.insurancepolicyService.getAllInsurancepolicyList().subscribe(data=>{
    this.insurancepolicies=data;
  });
}
updateInsurancepolicy(policyId:number)
{
this.router.navigate(['update-insurancepolicy',policyId]);
}
deleteInsurancepolicy(policyId:number)
{
this.insurancepolicyService.deleteInsurancepolicy(policyId).subscribe(data=>{
  console.log(data);
  this.reloadComponent();
},
error=>console.log(error));
}

reloadComponent() {
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['/get-insurancepolicy']);
}

navigateToAdminHome() {
  this.router.navigate(['/admin-home']);
}
}
