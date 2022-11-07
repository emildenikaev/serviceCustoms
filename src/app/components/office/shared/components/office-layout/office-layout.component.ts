import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-office-layout',
  templateUrl: './office-layout.component.html',
  styleUrls: ['./office-layout.component.scss']
})
export class OfficeLayoutComponent implements OnInit {

  constructor(private router: Router,
    public auth: AuthService) { }

  ngOnInit() {
  }
  
  logout(event: Event) {
    event.preventDefault();
    this.router.navigate(['/office', 'login']);
  }
}
