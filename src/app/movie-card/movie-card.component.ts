import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() private movies:any;
  @Input() private totalItems:number;
  p:number = 1;
  @Output() private onPageChangeEmit = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
    
  }

  onPageChange($event){
    this.p = $event;
    this.onPageChangeEmit.emit($event);
  }

}
