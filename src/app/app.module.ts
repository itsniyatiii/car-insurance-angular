import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { UpdatepaymentComponent } from './updatepayment/updatepayment.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { CreateclaimComponent } from './createclaim/createclaim.component';
import { ClaimListComponent } from './claim-list/claim-list.component';
import { UpdateclaimComponent } from './updateclaim/updateclaim.component';
import { CreateinsurancepolicyComponent } from './createinsurancepolicy/createinsurancepolicy.component';
import { InsurancepolicyListComponent } from './insurancepolicy-list/insurancepolicy-list.component';
import { UpdateinsurancepolicyComponent } from './updateinsurancepolicy/updateinsurancepolicy.component';
import { CreatecarComponent } from './createcar/createcar.component';
import { CarListComponent } from './car-list/car-list.component';
import { UpdatecarComponent } from './updatecar/updatecar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AssignClaimToInsurancepolicyComponent } from './assign-claim-to-insurancepolicy/assign-claim-to-insurancepolicy.component';
import { AssignPaymentToCarComponent } from './assign-payment-to-car/assign-payment-to-car.component';
import { AssignInsurancepolicyToUserComponent } from './assign-insurancepolicy-to-user/assign-insurancepolicy-to-user.component';
import { AssignCarToInsurancepolicyComponent } from './assign-car-to-insurancepolicy/assign-car-to-insurancepolicy.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatepaymentComponent,
    PaymentListComponent,
    UpdatepaymentComponent,
    CreateuserComponent,
    UserListComponent,
    UpdateuserComponent,
    CreateclaimComponent,
    ClaimListComponent,
    UpdateclaimComponent,
    CreateinsurancepolicyComponent,
    InsurancepolicyListComponent,
    UpdateinsurancepolicyComponent,
    CreatecarComponent,
    CarListComponent,
    UpdatecarComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AssignClaimToInsurancepolicyComponent,
    AssignPaymentToCarComponent,
    AssignInsurancepolicyToUserComponent,
    AssignCarToInsurancepolicyComponent,
    RegisterComponent,
    LoginComponent,
    AdminLoginComponent,
    HomeComponent,
    ThanksComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
