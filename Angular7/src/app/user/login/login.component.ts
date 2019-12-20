import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/login.model';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  successmsg:string;
   formData:Login;
   formModel={
     UserName:'',
     Password:''
   }
  constructor(private route:Router,private loginService:LoginService) { }

  ngOnInit() {
    
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    this.loginService.postData(form.value).subscribe(
      res=>{
          if(res.status===200){
            this.route.navigate(['order']);
            this.successmsg = 'token - ' + res.body.access_token;
          localStorage.setItem('access_token',res.body.access_token);
          }else{
            alert("UserName Password wrong");
          }
    })
    
  }
 
}
