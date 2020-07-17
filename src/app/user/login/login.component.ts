import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServices } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  getUser: FormGroup
  constructor( private fb: FormBuilder,private authService:  AuthServices, private router : Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.getUser = this.fb.group({
      pseudo: ['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login(){
    const value = this.getUser.value
    this.authService.login(value)
    this.router.navigate(['Acceuil','Game']);
  }
}
