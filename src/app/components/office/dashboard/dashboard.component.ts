import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AnswerService } from '../shared/services/answer.service';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(private answer: AnswerService,
    private _api : ApiService,
    private _auth: AuthService,
    private router: Router,
    
  ) { }
      
  ngOnInit(): void {

  }
  waiter: boolean = false
    dataSt = this.answer.answerRes;
    displayedColumns = [
'stoim20211Tostoim20201',

'stoim20211Tostoim20201',

'stoim20213Tostoim20203',
'stoim20214Tostoim20204'

  ];
  
  refresh() {
    this.dataSt = this.dataSt
  }
  back() {
    this.router.navigate(['/office', 'analytics'])
  };
}
