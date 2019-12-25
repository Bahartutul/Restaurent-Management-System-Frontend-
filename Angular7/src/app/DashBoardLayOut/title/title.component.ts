import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: []
})
export class TitleComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  logOut(){
    localStorage.removeItem("access_token");
    this.route.navigate(["login"]);

  }
}
