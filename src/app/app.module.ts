import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxUiLoaderModule, NgxUiLoaderConfig, NgxUiLoaderRouterModule } from  'ngx-ui-loader';

import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FourOFourComponent } from './four-ofour/four-ofour.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#28a745",
  bgsOpacity: 0.5,
  bgsPosition: "bottom-right",
  bgsSize: 60,
  bgsType: "ball-spin-clockwise",
  blur: 5,
  delay: 0,
  fgsColor: "#28a745",
  fgsPosition: "center-center",
  fgsSize: 60,
  fgsType: "rectangle-bounce",
  gap: 24,
  logoPosition: "center-center",
  logoSize: 120,
  logoUrl: "",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(46,46,46,0.8)",
  pbColor: "#28a745",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: true,
  text: "",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  maxTime: -1,
  minTime: 500
}


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieCardComponent,
    FourOFourComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
