import { Component, OnInit, Inject } from '@angular/core';
import{ MAT_DIALOG_DATA,MatDialogRef} from '@angular/material'
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/shared/item.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {
isValid:boolean=true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogref:MatDialogRef<ItemComponent>,
    private service:ItemService,
    private router:Router,
    private tstr:ToastrService

  ) { }

  ngOnInit() {
    this.reset();

  }
 reset(form?:NgForm){
if(form=null){
  form.resetForm();
}
this.service.formData={
  ItemId:null,
  Name:'',
  Price:0
};
 }
  AddItem(form?:NgForm){
    if(this.Validation()){
    this.service.PostItem().subscribe(res=>{
      this.reset();
      this.tstr.success("Item Added Successfully","Rastaurent Mgt.");
      this.dialogref.close();
    })
  
  }
}

  Validation(){
    this.isValid=true;
    if(this.service.formData.Name==""){
      this.isValid=false;
    }
    else if(this.service.formData.Price==0){
      this.isValid=false;

    }
    return this.isValid;
  }
}
