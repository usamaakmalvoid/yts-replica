import { MovieComponent } from './movie/movie.component';
import { MovieResolver } from './movie/movie.resolve';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
{ path: 'movie/:id', component: MovieComponent, resolve: { movie: MovieResolver } },
{ path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[MovieResolver]
})
export class AppRoutingModule { }
