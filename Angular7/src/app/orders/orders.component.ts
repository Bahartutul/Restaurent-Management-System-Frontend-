import { Component, OnInit } from '@angular/core';
import { OrderItemService } from '../shared/order-item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: []
})
export class OrdersComponent implements OnInit {
OrdersItem;
  constructor(private service:OrderItemService,
    private route:Router) { }

  ngOnInit() {
    this.getOrders();
  }
getOrders(){
this.service.getAllOrders().then(res=>this.OrdersItem=res);
}
uddateOrder(orderId:number){
  this.route.navigate(['/order/edit/'+orderId]);
}
}
