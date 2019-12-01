import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';
import { MatDialogConfig, MatDialog, MatTableDataSource } from '@angular/material';
import { ItemComponent } from '../item/item.component';
import {ToastrService} from 'ngx-toastr';
import { from } from 'rxjs';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styles: []
})
export class ItemDetailsComponent implements OnInit {
  result:Item[];
  // datasource:MatTableDataSource<any>;
  // displayedColumn: string[] = ['Name', 'Price', 'Action'];
  constructor(private service:ItemService,private dialog:MatDialog,private tstr:ToastrService) { }

  ngOnInit() {
    this.getAllItemDetails();
  }
getAllItemDetails(){
  this.service.getAllItems().then(res=>this.result=res as Item[]);
  // this.datasource=new MatTableDataSource(this.result);
}
AddOrEditItem(ItemIndex,ItemId){
  
  var config=new MatDialogConfig();
  config.autoFocus=true;
  config.disableClose=true;
  config.data={ItemIndex,ItemId};
  this.dialog.open(ItemComponent,config).afterClosed().subscribe(res=>this.getAllItemDetails());
  

}
deleteItem(ItemId){
  this.service.removeItem(ItemId).subscribe(res=>{
    this.tstr.success("Item Deleted","Restaurent Mgt.");
    this.getAllItemDetails();
  })
}
}
