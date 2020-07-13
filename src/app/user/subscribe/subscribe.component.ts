import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServices } from 'src/services/auth.service';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  getNewUser: FormGroup
  constructor( private  fb: FormBuilder,
                private authServices : AuthServices) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.getNewUser = this.fb.group({
      pseudo: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required],
      cpwd: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  subscribe(){
    const value = this.getNewUser.value 
    this.authServices.subscribe(value);
    
  }
}
