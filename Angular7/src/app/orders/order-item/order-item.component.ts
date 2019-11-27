import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';
import { OrderItem } from 'src/app/shared/order-item.model';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styles: []
})
export class OrderItemComponent implements OnInit {
formData:OrderItem;
result:Item[];
isValid:boolean=true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<OrderItemComponent>,
    private service:ItemService,
    private orderservice:OrderService
  ) { }

  ngOnInit() {
    this.getAll();
    if(this.data.orderIndex==null){
    this.formData={
      OrderItemId:null,
      OrderId:this.data.OrderId,
      ItemId:0,
     Quantity:0,
     Price:0,
     Total:0,
     Name:''
    }
  }else{
    this.formData=Object.assign({},this.orderservice.orderItems[this.data.orderIndex]);
  }
   
  }
getAll(){
this.service.getAllItems().then(
      res=>this.result=res as Item[]
    )
}
updatePrice(ctrl?){
  if(ctrl.selectedIndex==0){
    this.formData.Price=0;
    this.formData.Name="";
  }
  else{
    this.formData.Price=this.result[ctrl.selectedIndex-1].Price;
    this.formData.Name=this.result[ctrl.selectedIndex-1].Name;
  }
}
updateTotal(){
  this.formData.Total=parseFloat((this.formData.Price*this.formData.Quantity).toFixed(2));
}

addItem(form?:NgForm){
  if(this.validate(form.value)){
    if(this.data.orderIndex==null){
this.orderservice.orderItems.push(form.value);
    }
    else{
      this.orderservice.orderItems[this.data.orderIndex]=form.value;
    }
this.dialogRef.close();
  }
}

validate(formData:OrderItem){
  this.isValid=true;
  if(this.formData.ItemId==0){
    this.isValid=false;
  }
  else if(this.formData.Quantity==0){
    this.isValid=false;
  }
  return this.isValid;
}
}
