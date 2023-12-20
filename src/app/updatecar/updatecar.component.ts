import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdatecarComponent {
  car:Car=new Car();
  carId!:number;

constructor(private carService:CarService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.carId=this.route.snapshot.params['carId'];
   this.carService.getCarById(this.carId).subscribe(data=>{
   this.car =data;
   console.log(data);
   },
   error=>console.log(error));
  }


  onSubmit()
  {
  this.carService.updateCar(this.carId,this.car).subscribe(data=>{
  console.log(data);
  this.goTocarList();
},
  error=>console.log(error));
  }

  goTocarList()
  {
    this.router.navigate(['/get-car']);
  }

  navigateToAdminHome() {
    this.router.navigate(['/admin-home']);
  }



}


