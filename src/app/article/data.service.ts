import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;
  showData;
  paginArray = [1];
  nowPage = 1;
  onePageHaveCount = 10;
  constructor(private httpClient: HttpClient) {
    httpClient.get('https://raw.githubusercontent.com/dannypc1628/w3hexschool-Extension-API/master/data.json')
      .subscribe(result => {
        this.data = result;
        console.log(result);
        this.setPaginArry(this.data.length / this.onePageHaveCount + 1);
        this.goPage(1);
      });

  }

  setPaginArry(i) {
    this.paginArray = [];
    for (let j = 1; j < i; j++) {
      this.paginArray.push(j);
    }
  }
  goPage(i) {
    let length = this.onePageHaveCount * i;
    if (length > this.data.length) {
      length = this.data.length;
    }
    this.showData = this.data.slice(0 + this.onePageHaveCount * (i - 1), length);
    this.nowPage = i;
    console.log(this.showData);
  }
}
