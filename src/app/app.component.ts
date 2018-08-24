import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  input = "";
  results = {};

  constructor(public http: HttpClient) {}

  searchShows() {
    console.log(this.input);
    console.log('Searching show...');

    this.http.get<any>(`http://www.omdbapi.com/?apikey=217c4969&s=${this.input}`)
    .subscribe((data) => {

      this.results = data.results;
      console.log(this.results);
    });
  }


}
