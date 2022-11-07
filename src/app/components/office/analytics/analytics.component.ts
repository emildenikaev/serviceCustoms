import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

import { Table } from '../../shared/interfaces';
import { AnswerService } from '../shared/services/answer.service';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth.service';
import { TableService } from '../shared/services/table.service';

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
    displayedColumns: string[] = ['napr', 'nastranapr', 'tnved_description', 'stoim', 'netto', 'kol', 'region_description', 'region_s_description', 'month', 'year'];
    dataSource = new MatTableDataSource<Table>();
    countrySource = new MatTableDataSource();
    dataSo = new MatTableDataSource();
    tnvedSource = new MatTableDataSource();
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    title = 'tableAnatytics';
    constructor(private tableservice: TableService,
      private answer: AnswerService,
        private _api : ApiService,
        private _auth: AuthService,
        private router: Router,
        public fb: FormBuilder,) { }
    listAnalytics!: Table[];

    formReq: FormGroup
    analyticForm: FormGroup;
    submitted: boolean = false;
      dataS: any;
      countRes: any;
      wait: any;
    naprList: string[] = ['Экспорт', 'Импорт'];

    yearList: string[] = ['2019', '2020', '2021'];

      countryList: any;
      tnvedList: any;
      countryEx: any;
      tnvedEx: any;

  ngOnInit() {
    this.fetchTable();
    setTimeout(()=> {
        this.fetchContry();
        this.fetchTnved();
    })


    this.formReq = this.fb.group({
        naprsForm: new FormControl(),
        yearsForm: new FormControl(),
        countryForm: new FormControl(),
        tnvedsForm: new FormControl('', Validators.required),
    });
      this.analyticForm = new FormGroup({
        nastranapr: new FormControl(),
        tnved_description: new FormControl(),
        napr: new FormControl(),
        year: new FormControl(),
    })
  }

  
  fetchTnved() {
    this.tnvedEx = this.tableservice.getTnved().subscribe(data=> {
      this.tnvedList = data
      this.tnvedSource = new MatTableDataSource(this.tnvedList)
    })
  }

  fetchContry() {
    this.countryEx = this.tableservice.getCountry().subscribe(data=> {
      this.countryList = data
      this.countrySource = new MatTableDataSource(this.countryList)
    })
  }

  fetchTable() {
    this.tableservice.getTable().subscribe(data=> {
      this.listAnalytics = data
      
      this.dataSource = new MatTableDataSource(this.listAnalytics)
    
      setTimeout(()=>{
        this.dataSource.paginator = this.paginator;
   })

   this.dataSource.sort = this.sort;
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    submit(){
    let b = {user_form: this.formReq.value}
    this._api.postTypeRequest('delta', b).subscribe((response) => {
      this.answer.answerRes = response
      console.log(this.answer.answerRes)
      this.router.navigate(['/office', 'dashboard'])
      
    });
  }


}