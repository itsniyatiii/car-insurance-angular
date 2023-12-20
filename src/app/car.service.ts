import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';
import { Params } from '@angular/router';
import { Insurancepolicyassignment } from './insurancepolicyassignment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private addCar="http://localhost:8080/api/createCar";
  private getCars="http://localhost:8080/api/getAllCars";
  private getcarById="http://localhost:8080/api/getCarById";
  private assign="http://localhost:8080/api/car/assignInsurancePolicy";
  private editCar="http://localhost:8080/api/updateCar";
  private delCar="http://localhost:8080/api/deleteCar";
  constructor(private httpClient:HttpClient) {}
 
  createCar(car:Car):Observable<Object>
   {
 
     return this.httpClient.post(`${this.addCar}`,car);
   }
 
   getAllCarList():Observable<Car[]>
   {
     return this.httpClient.get<Car[]>(`${this.getCars}`);
   }
 
   getCarById(carId:number):Observable<Car>
   {
     return this.httpClient.get<Car>(`${this.getcarById}/${carId}`);
   }
   assignmentInsurancepolicy(policyId:number,carId:number):Observable<Params>
  {
     return this.httpClient.post(`${this.assign}/${policyId}/${carId}`,Insurancepolicyassignment);
  }
 
   updateCar(carId:number,car:Car):Observable<Object>
   {
     return this.httpClient.put(`${this.editCar}/${carId}`,car);
   }
   deleteCar(carId:number):Observable<Object>
   {
     return this.httpClient.delete(`${this.delCar}/${carId}`);
   }
 
 }
 