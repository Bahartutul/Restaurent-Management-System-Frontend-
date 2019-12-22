import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './orders/order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { ItemComponent } from './orders/item/item.component';
import { ItemDetailsComponent } from './orders/item-details/item-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGaurdService } from './gaurd/auth-gaurd.service';

const routes: Routes = [
  // {path:'',redirectTo:'order' ,pathMatch:'full'},
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  // {path:'user', children:[
  //   {path:'',component:UserComponent},
  //   {path:'login',component:LoginComponent},
  //   {path:'registration',component:RegistrationComponent}
  // ]},
  { path: 'orders', component: OrdersComponent },
  { path:'order', children:[
     {path:'',component:OrderComponent,canActivate:[AuthGaurdService]},
     {path:'edit/:id', component:OrderComponent,canActivate:[AuthGaurdService]}
  ]},
  {path:'item', component:ItemComponent},
  {path:'itemDeatails', component:ItemDetailsComponent}
 

];
export function tokenGetter(){
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        whitelistedDomains:["localhost:4000"],
        blacklistedRoutes:[]
      }
    })
  ],
  exports:[
RouterModule
  ]
})
export class AppRoutingModule { }
