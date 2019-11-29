import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private movies: any;
  private totalItems;


  constructor(private ngxUiLoaderService: NgxUiLoaderService, private httpService: HttpService) { }

  ngOnInit() {
    this.ngxUiLoaderService.start(); 
    this.httpService.call(
      {
        method: "get",
        url:"https://yts.lt/api/v2/list_movies.json?limit=20&page=1&sort_by=year"
      },
      null
    ).then(res => {
      this.totalItems = res.data.movie_count;
      this.movies = res.data.movies;
      this.ngxUiLoaderService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, err => {
      console.log(err);
      this.ngxUiLoaderService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    });
    
  }

  onSearch($event){
    console.log($event);
    this.ngxUiLoaderService.start(); 
    this.httpService.call(
      {
        method: "get",
        url:"https://yts.lt/api/v2/list_movies.json?limit=20&page=1&sort_by=year&query_term=" + $event 
      },
      null
    ).then(res => {
      this.totalItems = res.data.movie_count;
      this.movies = res.data.movies;
      this.ngxUiLoaderService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, err => {
      console.log(err);
      this.ngxUiLoaderService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    });
  }

  onPageChange($event){
    this.ngxUiLoaderService.start(); 
    this.httpService.call(
      {
        method: "get",
        url:"https://yts.lt/api/v2/list_movies.json?limit=20&page="+$event+"&sort_by=year"
      },
      null
    ).then(res => {
      console.log(res);
      this.totalItems = res.data.movie_count;
      this.movies = res.data.movies;
      this.ngxUiLoaderService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, err => {
      console.log(err);
      this.ngxUiLoaderService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    });
    
  }
}
