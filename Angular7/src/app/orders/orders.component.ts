import { Component, OnInit } from '@angular/core';
import { OrderItemService } from '../shared/order-item.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: []
})
export class OrdersComponent implements OnInit {
OrdersItem;
  constructor(private service:OrderItemService) { }

  ngOnInit() {
    this.getOrders();
  }
getOrders(){
this.service.getAllOrders().then(res=>this.OrdersItem=res);
}
}
