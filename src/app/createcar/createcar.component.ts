import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css']
})
export class CreatecarComponent implements OnInit {
  car:Car=new Car();

  constructor(private carService: CarService,
    private router:Router){}
  ngOnInit(): void {
    this.car.vin='1HGBH41JXMN109186'
    this.car.car_make='Bentley';
    this.car.car_model='Flying spur';
    this.car.car_manufacturing_year="2021";
    this.car.car_registration_no='MH12DE2354';
    this.car.policy_issued_date=new Date();
    this.car.policy_end_date=new Date();
    
  }
saveCar(){
this.carService.createCar(this.car).subscribe(data=>{
  console.log(data);
  this.goForAssign();
})
}

goForAssign()
{
this.router.navigate(['/assign-car-to-insurancepolicy']);
}

  onSubmit()
  {
this.saveCar();
  }


  navigateToUserHome() {
    this.router.navigate(['/user-home']);
  }

}
