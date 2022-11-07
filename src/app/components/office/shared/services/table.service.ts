import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Table } from "src/app/components/shared/interfaces";

@Injectable({
  providedIn: 'root'
})

export class TableService {
  httpOptions: any;


  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json,',
        'X-CSCAPI-KEY': ''
      })
    }
  }

  getTable(): Observable<any> {

    return this.httpclient.get('http://188.72.108.212:8000/data')

  }


  getCountry(): Observable<any> {

    return this.httpclient.get('http://188.72.108.212:8000/country')

  }

  getTnved(): Observable<any> {

    return this.httpclient.get('http://188.72.108.212:8000/tnved_description')

  }
}