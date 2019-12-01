import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './orders/order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { ItemComponent } from './orders/item/item.component';
import { ItemDetailsComponent } from './orders/item-details/item-details.component';

const routes: Routes = [
  {path:'',redirectTo:'order' ,pathMatch:'full'},
  { path: 'orders', component: OrdersComponent },
  { path:'order', children:[
     {path:'',component:OrderComponent},
     {path:'edit/:id', component:OrderComponent}
  ]},
  {path:'item', component:ItemComponent},
  {path:'itemDeatails', component:ItemDetailsComponent}
  // {path:'itemDetails',children:[
  //   {path:'',component:ItemDetailsComponent},
  //   {path:'edit/:id',component:ItemDetailsComponent}
  // ]}

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
RouterModule
  ]
})
export class AppRoutingModule { }
