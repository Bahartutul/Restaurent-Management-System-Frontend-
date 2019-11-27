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
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  entryComponents:[OrderItemComponent],
  providers: [OrderService,CustomerService,OrderItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
