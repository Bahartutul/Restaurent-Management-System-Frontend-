import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {  Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private jwtHelper:JwtHelperService,private route:Router) { }
canActivate(){
  var token=localStorage.getItem("access_token");
  
  console.log(token);
  if(token){
    
    return true;
  }
  this.route.navigate(["login"]);
  return false;
}

}