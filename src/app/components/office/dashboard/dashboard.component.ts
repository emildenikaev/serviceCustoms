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
    answerTable = this.answer.saveAnalytics;
  link = 'http://188.72.108.212:8000/download/'+this.answerTable.resForm+'.xlsx'
    displayedColumns = [
      'tnved',
      'stoim20211Tostoim20201',
      'stoim20212Tostoim20202',
      'stoim20213Tostoim20203',
      'stoim20214Tostoim20204',
      'stoim20215Tostoim20205',
      'stoim20216Tostoim20206',
      'stoim20217Tostoim20207',
      'stoim20218Tostoim20208',
      'stoim20219Tostoim20209',
      'stoim202110Tostoim202010',
      'stoim202111Tostoim202011',
      'stoim202112Tostoim202012'
  ];
  
  refresh() {
    this.dataSt = this.dataSt
  }
  back() {
    this.router.navigate(['/office', 'analytics'])
  };
}
