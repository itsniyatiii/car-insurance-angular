import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars: Car[] | undefined;

  constructor(private carService: CarService,
    private router: Router){}
    ngOnInit(): void {
      this.getCarList();
    }
  
  private getCarList()
  {
    this.carService.getAllCarList().subscribe(data=>{
      this.cars=data;
    });
  }
  updateCar(carId:number)
  {
  this.router.navigate(['update-car',carId]);
  }
  deleteCar(carId:number)
  {
  this.carService.deleteCar(carId).subscribe(data=>{
    console.log(data);
    this.reloadComponent();
  },
  error=>console.log(error));
  }
  
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/get-car']);
  }

  navigateToAdminHome() {
    this.router.navigate(['/admin-home']);
  }

  
  
  }
  
