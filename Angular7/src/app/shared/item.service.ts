import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  ngOnInit(){
    this.getAllItems();
  }
  getAllItems(){
   return this.http.get(environment.apiUrl+"/Items").toPromise();
  }
}
