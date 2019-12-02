import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-four-ofour',
  templateUrl: './four-ofour.component.html',
  styleUrls: ['./four-ofour.component.scss']
})
export class FourOFourComponent implements OnInit {

  @Output() onBack = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }

  goToMovies(){
    console.log("goToMoviesClicked");
    this.onBack.emit(true);
  }
  
}
