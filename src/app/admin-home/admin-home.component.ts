import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor(private router: Router) {}

  
  logout(): void {
    this.router.navigate(['/home']);
    // Implement any other logic needed upon logout
  }  

}
