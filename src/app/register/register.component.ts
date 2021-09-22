import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'register_user': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm_password': ['', Validators.required]
    })
  }

  registerUser(): void {
    if (this.registerForm.status == 'VALID') {
      this.user.registerUser({
        'name': this.registerForm.value['register_user'],
        'password': this.registerForm.value['password'],
        'confirm_password': this.registerForm.value['confirm_password']
    });
  }
}

}
