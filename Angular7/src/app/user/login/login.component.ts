import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    
  }
  onSubmit(form?:NgForm){
    this.route.navigate(['order']);
  }
 
}
