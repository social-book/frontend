import { Component, OnInit } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  files: File[];

  constructor(private http: HttpClient) {
  }

  onChange(event: any, input: any) {
    this.files = [].slice.call(event.target.files);

    input.value = this.files.map(f => f.name).join(', ');
  }

  onUpload() {
    const uploadData = new FormData();

    for ( let i = 0; i< this.files.length; i++ ) {
      uploadData.append('myFile', this.files[i], this.files[i].name);
      console.log('posting file: ' + this.files[i].name);
      this.http.post('https://jsonplaceholder.typicode.com/posts/', uploadData, {
        reportProgress: true,
        observe: 'events'
      })
        .subscribe(event => {
          console.log('data pushed'); // handle event here
          console.log(event); // handle event here
        });

    }

  }

  ngOnInit() {
  }

}
