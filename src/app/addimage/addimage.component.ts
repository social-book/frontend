import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  files: File[];
  params: HttpParams;

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
    document.getElementById('uploader').hidden = true;
  }

  xor2() {
    document.getElementById('sa').hidden = false;
    document.getElementById('ca').hidden = true;
    document.getElementById('uploader').hidden = false;
  }

  onUpload() {

    const data = {
      'albumId': '1',
      'userID': '1'
    };
    // let headers = new HttpHeaders()
    //   .set('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW')
    // let headers = new HttpHeaders().set('content-type', 'multipart/form-data')
    const formData: FormData = new FormData();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    formData.append('data', JSON.stringify(data));
    for (let i = 0; i < this.files.length; i++) {
      //      formData.append(i.toString(), this.files[i], this.files[i].name);
      // formData.append(i.toString(), this.files[i], this.files[i].name);

    }

    formData.append('1', this.files[0], this.files[0].name);


    console.log(formData.get('1'));

    this.http.post<FormData>('http://localhost:8082/images', formData, httpOptions).subscribe(
      (r) => {
        console.log('got r', r, ' : ', formData);
      },
      error => {
        console.log(error);
      }
    );


    // ?albumId=1&userId=1
    this.http.post('http://localhost:8082/images', formData).subscribe(
      (r) => {
        console.log('got r', r, ' : ', formData);
      },
      error => {
        console.log(error);
      }
    );

    /*

    const uploadData = new FormData();

    for ( let i = 0; i < this.files.length; i++ ) {
      uploadData.append('myFile', this.files[i], this.files[i].name);
      console.log('posting file: ' + this.files[i].name);
      console.log('BASE 64: ' + this.getBase64(this.files[i]));
      // https://jsonplaceholder.typicode.com/posts/
      // uploadData -> this.files[i]
      this.http.post('http://localhost:8082/images?albumId=1&userId=1', this.files[i], {
        reportProgress: true,
        observe: 'events'
      })
        .subscribe(event => {
          console.log('data pushed'); // handle event here
          console.log(event); // handle event here
        });

    }
     */

  }

  ngOnInit() {
  }

}
