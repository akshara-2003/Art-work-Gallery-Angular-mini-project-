import { Component } from '@angular/core';
import { faHeart as faHeartOutlined } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FavouritesService } from './favourites.service';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isNavbarOpen = false;
  constructor(public favoriteservice:FavouritesService , private router:Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeNavbar();
      }
    });

  }
  l=this.favoriteservice.favourites.length;
  title = 'artGallery';
  

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  closeNavbar() {
    this.isNavbarOpen = false;
  }
}
