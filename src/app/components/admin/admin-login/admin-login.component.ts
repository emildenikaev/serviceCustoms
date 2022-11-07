import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../shared/interfaces';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }
  submit() {
    
    if (this.form.invalid){
      return
    }

    this.submitted = true
    
    const admin: Admin ={
      email: this.form.value.email,
      password: this.form.value.password,
    }


    this.auth.login(admin).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'admin-page'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }
}