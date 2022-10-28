import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  
  
  form = new FormGroup({
    soname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    tel: new FormControl('7', [
        Validators.pattern('[0-9]*'), Validators.minLength(11), Validators.maxLength(11)
      ])
  })

  submit(){
   this.form.reset()
  }
  ngOnInit() {
  }

}
