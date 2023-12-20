import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Insurancepolicy } from '../insurancepolicy';
import { InsurancepolicyService } from '../insurancepolicy.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  insurancePolicies: Insurancepolicy[] = [];

  constructor(private insurancepolicyService: InsurancepolicyService, private router: Router) {}

  ngOnInit(): void {
    this.loadInsurancePolicies();
  }

  loadInsurancePolicies(): void {
    this.insurancepolicyService.getAllInsurancepolicyList().subscribe(
      (data: Insurancepolicy[]) => {
        this.insurancePolicies = data;
      },
      (error) => {
        console.error('Error fetching insurance policies: ', error);
      }
    );
  }

  
  applyForPolicy() {
    this.router.navigate(['//assign-insurancepolicy-to-user']);
  }


  applyForClaim() {
    // Additional logic for applying for the claim
    
    // Navigate to the create-claim page
    this.router.navigate(['/create-claim']);
  }
  logout(): void {
    this.router.navigate(['/home']);
    // Implement any other logic needed upon logout
  }

  

}

