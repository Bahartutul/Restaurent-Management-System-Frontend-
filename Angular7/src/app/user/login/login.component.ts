import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
   formData:Login;
   formModel={
     UserName:'',
     Password:''
   }
  constructor(private route:Router) { }

  ngOnInit() {
    this.formData;
  }
  onSubmit(form?:NgForm){
    this.route.navigate(['order']);
  }
 
}
