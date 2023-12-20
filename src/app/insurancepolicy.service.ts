import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insurancepolicy } from './insurancepolicy';
import { Params } from '@angular/router';
import { Insurancepolicyassignment } from './insurancepolicyassignment';

@Injectable({
  providedIn: 'root'
})
export class InsurancepolicyService {

  private addInsurancepolicy="http://localhost:8080/api/createPolicy";
 private getInsurancepolicys="http://localhost:8080/api/getAllPolicies";
 private getpolicyById="http://localhost:8080/api/getPolicyById";
 private assign="http://localhost:8080/api/policy/assignUser";
 private editInsurancepolicy="http://localhost:8080/api/updatePolicy";
 private delInsurancepolicy="http://localhost:8080/api/deletePolicy";
 constructor(private httpClient:HttpClient) {}



 createInsurancepolicy(insurancepolicy:Insurancepolicy):Observable<Object>
  {

    return this.httpClient.post(`${this.addInsurancepolicy}`,insurancepolicy);
  }

  getAllInsurancepolicyList():Observable<Insurancepolicy[]>
  {
    return this.httpClient.get<Insurancepolicy[]>(`${this.getInsurancepolicys}`);
  }

  getInsurancepolicyById(insurancepolicyId:number):Observable<Insurancepolicy>
  {
    return this.httpClient.get<Insurancepolicy>(`${this.getpolicyById}/${insurancepolicyId}`);
  }

  assignmentUser(userId:number,policyId:number):Observable<Params>
  {
    return this.httpClient.post(`${this.assign}/${userId}/${policyId}`,Insurancepolicyassignment);
    }

  updateInsurancepolicy(insurancepolicyId:number,student:Insurancepolicy):Observable<Object>
  {
    return this.httpClient.put(`${this.editInsurancepolicy}/${insurancepolicyId}`,student);
  }
  deleteInsurancepolicy(insurancepolicyId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.delInsurancepolicy}/${insurancepolicyId}`);
  }
}
