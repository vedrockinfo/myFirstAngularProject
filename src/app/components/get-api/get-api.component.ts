import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {
  userLists: any [] = [];
  constructor(private http: HttpClient) {
    
  }
  getAllUsers() {
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((result:any) => {
      debugger;
      this.userLists = result;
    });
  }
}
