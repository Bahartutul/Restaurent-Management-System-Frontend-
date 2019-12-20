import { Injectable } from '@angular/core';

import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:Login;
  constructor(private http:HttpClient) { }

  postData(data):any{
    console.log("---"+data.UserName);
    const body=new HttpParams()
    .set('UserName',data.UserName)
    .set('Password',data.Password)
    .set('grant_type','password')

    return this.http.post("http://localhost:43753/token",body.toString(), {observe: 'response',    
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },});
  }
}
