import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
formData:Order;
orderItems:OrderItem[];
  constructor(private http:HttpClient) { }
  ngOnInit(){

  }
  postAllOrder(){
    var body={
      ...this.formData,
      OrderItems:this.orderItems
    }
   return this.http.post(environment.apiUrl+"/Orders",body);
  }
  getOrderById(id:number):any{
  return this.http.get(environment.apiUrl+"/Orders/"+id).toPromise();
  }
}
