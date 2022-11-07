import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(
    private _api : ApiService,
    private _auth: AuthService,
    private router: Router,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password:['', Validators.required]
    });
   
  }

  login(){
    let b = {user_form: this.form.value}
    this._api.postTypeRequest('login', b).subscribe((res: any) => {
      if(JSON.stringify(res) === JSON.stringify({auth_token: 'OK'})){
        this._auth.setDataInLocalStorage('token', res.access_token)
        this.router.navigate(['/office', 'analytics'])
      }
    }, err => {
      console.log(err)
    });
  }

}
