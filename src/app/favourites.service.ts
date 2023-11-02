import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  public favourites:any[]=[];
  constructor() { }
  addFavourite(item:any){
    this.favourites.push(item);
  }
  removeFavourite(item:any){
    const index = this.favourites.findIndex((favItem)=>
      favItem.id ===item.id);
      if(index!==-1){
        this.favourites.splice(index,1);
      }
  }
  getfavourites(){
    return this.favourites;
  }
  isFav(item:any):boolean{
    if(this.favourites.find(e=>e.id==item.id))
    return true
  return false
  }
}
