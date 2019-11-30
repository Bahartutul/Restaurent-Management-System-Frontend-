import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styles: []
})
export class ItemDetailsComponent implements OnInit {
  result:Item[];
  constructor(private service:ItemService) { }

  ngOnInit() {
    this.getAllItemDetails();
  }
getAllItemDetails(){
  this.service.getAllItems().then(res=>this.result=res as Item[]);
}
}
