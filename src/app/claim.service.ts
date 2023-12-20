import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from './claim';
import { Params } from '@angular/router';
import { Claimassignment } from './claimassignment';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

 private addClaim="http://localhost:8080/api/createClaim";
 private getClaims="http://localhost:8080/api/getAllClaims";
 private getclaimById="http://localhost:8080/api/getClaimById";
 private assign="http://localhost:8080/api/claim/assignInsurancePolicy";
 private editClaim="http://localhost:8080/api/updateClaim";
 private delClaim="http://localhost:8080/api/deleteClaim";
 constructor(private httpClient:HttpClient) {}

  createClaim(claim:Claim):Observable<Object>
  {

    return this.httpClient.post(`${this.addClaim}`,claim);
  }

  getAllClaimList():Observable<Claim[]>
  {
    return this.httpClient.get<Claim[]>(`${this.getClaims}`);
  }

  getClaimById(claimId:number):Observable<Claim>
  {
    return this.httpClient.get<Claim>(`${this.getclaimById}/${claimId}`);
  }

  assignmentInsurancepolicy(policyId:number,claimId:number):Observable<Params>
    {
      return this.httpClient.post(`${this.assign}/${policyId}/${claimId}`,Claimassignment);
    }

  updateClaim(claimId:number,claim:Claim):Observable<Object>
  {
    return this.httpClient.put(`${this.editClaim}/${claimId}`,claim);
  }
  deleteClaim(claimId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.delClaim}/${claimId}`);
  }

}
