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


  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

 xor1() {
  document.getElementById('sa').hidden = true;
  document.getElementById('ca').hidden = false;
}

xor2() {
  document.getElementById('sa').hidden = false;
  document.getElementById('ca').hidden = true;
}

  onUpload() {
    const uploadData = new FormData();

    for ( let i = 0; i < this.files.length; i++ ) {
      uploadData.append('myFile', this.files[i], this.files[i].name);
      console.log('posting file: ' + this.files[i].name);
      console.log('BASE 64: ' + this.getBase64(this.files[i]));
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
