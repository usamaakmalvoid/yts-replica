import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if(this.route.snapshot.data.movie.data.movie.id != 0)
      this.movie =this.route.snapshot.data.movie.data.movie; 
    else
      this.router.navigate(['/home']);
  }

  back(){
    this.router.navigate(['/home']);
  }

  download(link){
    window.open(link, "_blank");
  }

}
