import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  getUser: FormGroup
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.getUser = this.fb.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login(){
    const value = this.getUser.value
  }
}
