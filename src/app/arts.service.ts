import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArtsService {
   load = false;
  constructor(private http:HttpClient) { }
  getProducts(pageSize: number, startPage: number,query:string):any{
    let data:any;
    let paginationUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}&page=${startPage+1}&limit=${pageSize}&fields=image_id,title,id`;
    this.load=false;
    return this.http.get(paginationUrl).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(()=>error);
  }
  getDetails(artworkId:number){
    let data:any;
    let artUrl = `https://api.artic.edu/api/v1/artworks/${artworkId}`;
    return this.http.get(artUrl);
  }
  searchArtWorks(query:string){
    let data:any;
    let searchUrl=`https://api.artic.edu/api/v1/artworks/search?q=${query}`;
    return this.http.get(searchUrl);
  }
  share(id:number){
    if(navigator.share){
      navigator.share({
        title:'Artwork',
        text:'Check this out',
        url:`${window.location.origin}/artWorks/${id}`
      })
    }
  }
}
