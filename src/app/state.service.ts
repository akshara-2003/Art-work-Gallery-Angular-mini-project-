import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public favourites:any[]=[];
  private selectedItems:any[]=[];
  constructor() { }
  getSelectedItems(){
    return this.selectedItems;
  }
  toggleItem(item:any){
    const index = this.selectedItems.findIndex((selectedItem)=>selectedItem.id===item.id)
    if(index===-1)
    this.selectedItems.push(item);
    else
    this.selectedItems.splice(index,1);
  }
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
 
}
