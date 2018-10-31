import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-maintainancemode',
  templateUrl: './maintainancemode.component.html',
  styleUrls: ['./maintainancemode.component.css']
})
export class MaintainancemodeComponent implements OnInit {

  constructor(private httpclient: HttpClient) {

    this.httpclient.get('https://my-json-server.typicode.com/mihastele/myJsonMock/friendsMock').subscribe(data => console.log(data));

  }

  ngOnInit() {
  }

}
