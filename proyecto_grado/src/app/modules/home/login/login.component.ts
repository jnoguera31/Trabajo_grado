import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit{

  emailpattern: any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;





  createFormGroup(){
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern(this.emailpattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])

    })

  }
  contactForm = FormGroup
  constructor(){}

  ngOnInit(): void {
    
  }
  login(form: NgForm){
    const email=form.value.email;
    const password=form.value.password;
    
  }

  Onsaveform(){
   

  }
}
