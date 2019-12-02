import { HttpService } from './../http.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any;
  totalItems;
 
  sortBy = 'year';
  query = '';
  page: number = 1;
 
  visible: boolean = true;
 
   constructor(private ngxUiLoaderService: NgxUiLoaderService, private httpService: HttpService) { }
 
   ngOnInit() {
     this.callApi();
   }
 
   onSearch($event){
     if(this.query == $event){
       return;
     }
     this.page = 1;
     this.query = $event;
     this.callApi();
   }
 
   onPageChange($event){
     this.page = $event;
     this.callApi();
   }
 
   callApi(){
     this.ngxUiLoaderService.start(); 
     this.httpService.call(
       {
         method: "get",
         url:"https://yts.lt/api/v2/list_movies.json?limit=20&page="+this.page+"&sort_by="+this.sortBy+"&query_term=" + this.query 
       },
       null
     ).then(res => {
       console.log(res);
       if(res.data.movie_count == 0){
         console.log("data not available");
         this.visible = false;
       }else{
         this.visible = true;
         this.totalItems = res.data.movie_count;
         this.movies = res.data.movies;
       }
       this.ngxUiLoaderService.stop(); 
     }, err => {
       console.log(err);
       this.visible = false;
       this.ngxUiLoaderService.stop(); 
     });
   }
 
   onBack(data){
     this.page = 1;
     this.query = '';
     this.callApi();
   }
}
