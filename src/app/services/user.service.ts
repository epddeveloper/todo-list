import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = 'assets/users.json';

  constructor(private http: HttpClient) { }

  getUser():void {
    this.http.get<any>('../../assets/config.json').subscribe(data => {
      console.log(data);
    })
  }

  loginUser(userData: User): void {
    //ad login logic
    console.log(userData);
  }

  registerUser(userData: User): void {
    //add registerlogic
    console.log(userData);
  }

}
