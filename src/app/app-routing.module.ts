import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ThanksComponent } from './thanks/thanks.component';


const routes: Routes = [
{path:'create-payment',component:CreatepaymentComponent},
{path:'get-payment',component:PaymentListComponent},
{path:'update-payment/:paymentId',component:UpdatepaymentComponent},

{path:'create-user',component:CreateuserComponent},
{path:'get-user',component:UserListComponent},
{path:'update-user/:userId',component:UpdateuserComponent},

{path:'create-car',component:CreatecarComponent},
{path:'get-car',component:CarListComponent},
{path:'update-car/:carId',component:UpdatecarComponent},

{path:'create-claim',component:CreateclaimComponent},
{path:'get-claim',component:ClaimListComponent},
{path:'update-claim/:claimId',component:UpdateclaimComponent},

{path:'create-insurancepolicy',component:CreateinsurancepolicyComponent},
{path:'get-insurancepolicy',component:InsurancepolicyListComponent},
{path:'update-insurancepolicy/:policyId',component:UpdateinsurancepolicyComponent},


{path:'user-home', component:UserHomeComponent},
{path:'admin-home', component:AdminHomeComponent},
{path:'assign-claim-to-insurancepolicy', component:AssignClaimToInsurancepolicyComponent},
{path:'assign-payment-to-car', component:AssignPaymentToCarComponent},
{path:'assign-insurancepolicy-to-user', component:AssignInsurancepolicyToUserComponent},
{path:'assign-car-to-insurancepolicy', component:AssignCarToInsurancepolicyComponent},
//{path:'',redirectTo:'/user-home',pathMatch:'full'},

{path:'register',component:RegisterComponent},
{path:'login', component:LoginComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'admin-login', component:AdminLoginComponent},
{path:'home', component:HomeComponent},

{ path: 'createcar/:id', component: CreatecarComponent },
{path: 'thanks' ,component: ThanksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
