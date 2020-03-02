import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

data;
  constructor(private httpClient: HttpClient) {
    httpClient.get('https://raw.githubusercontent.com/dannypc1628/w3hexschool-Extension-API/master/data.json')
    .subscribe(result => {
      this.data = result;
      console.log(result);

    }
      )

  }

  run() {
    console.log('data service');
  }
}
