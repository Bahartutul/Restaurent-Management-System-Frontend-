import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';
import {MatDialogModule, MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { OrderItemComponent } from '../order-item/order-item.component';
import { Customer } from 'src/app/shared/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { config } from 'rxjs';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
  form:NgForm;
  getAllCustomer:Customer[];
  isValid:boolean=true;
  constructor(private service:OrderService,
    private dialog:MatDialog,
    private customerService:CustomerService,
    private toastr:ToastrService,
    private route:Router,
    private currentRoute:ActivatedRoute) { }

  ngOnInit() {
     let orderId=this.currentRoute.snapshot.paramMap.get('id');
     if(orderId==null){
       this.reset();
     }else{
       this.service.getOrderById(parseInt(orderId)).then(res=>{
         this.service.formData=res.order,
         this.service.orderItems=res.orders
       })
     }
     this.reset();
     this.getAllCus();

  }

  reset(){
    if(this.form=null)
     this.form.resetForm();
    this.service.formData={
      OrderId:null,
      OrderNo:Math.floor(10000+(Math.random()*90000)).toString(),
      CustomerId:0,
      GTotal:0,
      PmMethod:'',
      Name:'',
      DeletedItems:''
    };
    this.service.orderItems=[];
  }

  AddOrEditOrderItem(orderIndex,OrderId){
    const dialogConf=new MatDialogConfig();
    dialogConf.autoFocus=true;
    dialogConf.disableClose=true;
    dialogConf.width="50%";
    dialogConf.data={orderIndex,OrderId}
    this.dialog.open(OrderItemComponent,dialogConf).afterClosed().subscribe(res=>this.updateGrandTotal());
  }
  deleteOrderItem(orderItemId:number,i:number){
   if(orderItemId!=null){
       this.service.formData.DeletedItems += orderItemId+",";
      }
    this.service.orderItems.splice(i,1);
  
    this. updateGrandTotal();
  }
  updateGrandTotal(){
    this.service.formData.GTotal= this.service.orderItems.reduce((prev,curr)=>{
     return prev+curr.Total;
    },0)
    this.service.formData.GTotal=parseFloat(this.service.formData.GTotal.toFixed(2));
  }

  getAllCus(){
    this.customerService.getAllCustomer().then(res=>this.getAllCustomer=res as Customer[]);
  }
  onSubmit(form?:NgForm){
   if(this.validateForm()){
     this.service.postAllOrder().subscribe(res=>{
       this.reset();
       this.toastr.success("Successfully Orders Done","Restaurent App.");
this.route.navigate(["/orders"]);   
 })
   }
  }
  validateForm(){
    this.isValid=true;
    if(this.service.formData.CustomerId==0){
      this.isValid=false;
    }
    else if(this.service.orderItems.length<1){
      this.isValid=false;
    }
    else if(this.service.formData.PmMethod==''){
      this.isValid=false;
    }
    return this.isValid;
  }

  AddFoodItem(ItemIndex,ItemId){
    var Config=new MatDialogConfig();
    Config.autoFocus=true;
    Config.disableClose=true;
    Config.data={ItemIndex,ItemId};
    this.dialog.open(ItemComponent,Config);
  }
}
