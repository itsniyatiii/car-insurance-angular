import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpayment',
  templateUrl: './createpayment.component.html',
  styleUrls: ['./createpayment.component.css']
})
export class CreatepaymentComponent implements OnInit{

  payment:Payment=new Payment();

  constructor(private paymentService: PaymentService,
    private router:Router){}
  ngOnInit(): void {
    this.payment.payment_amount=4000;
    this.payment.payment_date= new Date();
    
  }
savePayment(){
this.paymentService.createPayment(this.payment).subscribe(data=>{
  console.log(data);
  this.goForAssign();
})
}

goForAssign()
{
this.router.navigate(['/assign-payment-to-car']);
}

  onSubmit()
  {
this.savePayment();
  }

  navigateToUserHome() {
    this.router.navigate(['/user-home']);
  }


}
