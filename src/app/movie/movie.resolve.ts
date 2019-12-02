import { HttpService } from './../http.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MovieResolver implements Resolve<any>{
    constructor(private httpService: HttpService){}

    resolve(route: ActivatedRouteSnapshot){
        return Promise.resolve(this.httpService.call({
            method:'get',
            url:'https://yts.lt/api/v2/movie_details.json?movie_id='+route.params.id
        }));
    }
}