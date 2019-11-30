import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from './item.model';
import { OrderItem } from './order-item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
formData:Item;
orderItems:OrderItem[];
  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.getAllItems();
  
  }
  getAllItems(){
   return this.http.get(environment.apiUrl+"/Items").toPromise();
  }
  PostItem(){
    let body={
      ...this.formData,
      OrderItems: this.orderItems
    }
    return this.http.post(environment.apiUrl+"/Items",this.formData);
  }
}
