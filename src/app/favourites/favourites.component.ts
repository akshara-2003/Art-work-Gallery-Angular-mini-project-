import { Component ,OnInit} from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit{
  favorites:any[]=[];
  constructor(public favouriteService:FavouritesService,public artworkService:ArtsService){
  }
  ngOnInit(){
    this.favorites = this.favouriteService.getfavourites();
  }
}
