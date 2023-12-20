import { Component, OnInit } from '@angular/core';
import { Insurancepolicy } from '../insurancepolicy';
import { InsurancepolicyService } from '../insurancepolicy.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateinsurancepolicy',
  templateUrl: './updateinsurancepolicy.component.html',
  styleUrls: ['./updateinsurancepolicy.component.css']
})
export class UpdateinsurancepolicyComponent implements OnInit {
  insurancepolicy:Insurancepolicy=new Insurancepolicy();
  policyId!:number;

constructor(private insurancepolicyService:InsurancepolicyService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.policyId=this.route.snapshot.params['policyId'];
   this.insurancepolicyService.getInsurancepolicyById(this.policyId).subscribe(data=>{
   this.insurancepolicy = data;
   },
   error=>console.log(error));
  }

  onSubmit()
  {
this.insurancepolicyService.updateInsurancepolicy(this.policyId,this.insurancepolicy).subscribe(data=>{
  console.log(data);
  this.goToinsurancepolicyList();
},
error=>console.log(error));
  }

  goToinsurancepolicyList()
  {
    this.router.navigate(['/get-insurancepolicy']);
  }

  navigateToAdminHome() {
    this.router.navigate(['/admin-home']);
  }


}
