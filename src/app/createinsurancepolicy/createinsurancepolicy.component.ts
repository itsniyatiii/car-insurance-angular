import { Component, OnInit } from '@angular/core';
import { Insurancepolicy } from '../insurancepolicy';
import { InsurancepolicyService } from '../insurancepolicy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createinsurancepolicy',
  templateUrl: './createinsurancepolicy.component.html',
  styleUrls: ['./createinsurancepolicy.component.css']
})
export class CreateinsurancepolicyComponent implements OnInit{
  policy_type=['Comprehensive','Collision','Liability','Gap','Personal Injury Protection (PIP)','Rental Reimbursement']
  duration_in_months=[3,6,12]
  insurancepolicy:Insurancepolicy=new Insurancepolicy();

  constructor(private insurancepolicyService: InsurancepolicyService,
    private router:Router){}
  ngOnInit(): void {
    this.insurancepolicy.policy_no='1212343445';
    this.insurancepolicy.policy_type=this.policy_type[0];
    this.insurancepolicy.duration_in_months=this.duration_in_months[2];
    this.insurancepolicy.premium_amount=120000;
    this.insurancepolicy.coverage_amount=2200;
    this.insurancepolicy.deductible_amount=1000;
    
  }
saveInsurancepolicy(){
this.insurancepolicyService.createInsurancepolicy(this.insurancepolicy).subscribe(data=>{
  console.log(data);
  this.goToInsurancepolicyList();
})
}

goToInsurancepolicyList()
{
this.router.navigate(['/get-insurancepolicy']);
}

  onSubmit()
  {
this.saveInsurancepolicy();
  }

  navigateToAdminHome() {
    this.router.navigate(['/admin-home']);
  }

}
