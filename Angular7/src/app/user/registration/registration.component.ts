import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/shared/user-register.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {
formdata:UserRegister;
  constructor() { }

  ngOnInit() {
    this.reset();
  }

  reset(form?:NgForm){
    if(form=null)
    form.resetForm();
    this.formdata={
      Id:null,
      UserName:"",
      UserPhone:"",
      UserEmail:"",
      UserPassword:"",
      UserRole:""
    }
  }

  onSubmit(form?:NgForm){
    console.log(form.value);
  }

}
