import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtCardsComponent } from './art-cards/art-cards.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'artWorks/:id',
    component:ViewComponent
  },
  {
    path:'artWorks',
    component:ArtCardsComponent
  },
  {
    path:'favorites',
    component:FavouritesComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
