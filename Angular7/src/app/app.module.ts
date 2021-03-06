import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemComponent } from './orders/order-item/order-item.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderService } from './shared/order.service';
import{FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './shared/customer.service';
import { ToastrModule } from 'ngx-toastr';
import { OrderItemService } from './shared/order-item.service';
import { ItemComponent } from './orders/item/item.component';
import { ItemService } from './shared/item.service';
import { ItemDetailsComponent } from './orders/item-details/item-details.component';
// import { MatPaginator, MatPaginatorModule, MatTableModule } from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { TitleComponent } from './DashBoardLayOut/title/title.component';
import { LoginService } from './shared/login.service';
export function tokenGetter(){
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemComponent,
    ItemComponent,
    ItemDetailsComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    TitleComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    // MatPaginatorModule,
    // MatTableModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
  ],
  entryComponents:[OrderItemComponent,ItemComponent],
  providers: [OrderService,CustomerService,OrderItemService,ItemService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
