import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  loginUser(): void {
    if (this.loginForm.status == 'VALID') {
      this.user.loginUser({
        'name': this.loginForm.value['login'],
        'password': this.loginForm.value['password']
      });
    }
  }
}
