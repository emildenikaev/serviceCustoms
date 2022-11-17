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
@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
    displayedColumns: string[] = [ 'tnved_cat', 'category', 'napr',  '2019', '2020', '2021', '2020vs2019', '2021vs2020'];
    dataSource = new MatTableDataSource<any>();
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    title = 'tableAnatytics';
    constructor(private router: Router, private tableservice: TableService) { }
    listAnalytics: any;
    waiter: boolean = false;

  ngOnInit() {
    this.fetchTable();
    setTimeout(()=> {
      this.waiter = true;
    }, 5500)

  }


  fetchTable() {
    this.tableservice.getRecTable().subscribe(data=> {
      this.listAnalytics = data;
      this.dataSource = new MatTableDataSource(this.listAnalytics);
    
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

    back() {
    this.router.navigate(['/office', 'analytics'])
  };
}
