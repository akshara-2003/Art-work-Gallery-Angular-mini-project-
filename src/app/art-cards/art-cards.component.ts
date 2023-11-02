import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtsService } from '../arts.service';
import { MatPaginator } from '@angular/material/paginator';
import { FavouritesService } from '../favourites.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-art-cards',
  templateUrl: './art-cards.component.html',
  styleUrls: ['./art-cards.component.css']
})
export class ArtCardsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  total_length: number = 0;
  paginatorArtworkList: any[] = [];
  filteredArtWorkList: any[] = [];
  pageSize: number = 4;
  isFavArt: boolean = false
  favoriteArtworks: any[] = [];
  query: string = '';
  searchForm: FormGroup;
  constructor(public artworkService: ArtsService, public favouriteService: FavouritesService, private formBuilder: FormBuilder) {
    this.searchForm = new FormGroup({
      'query': new FormControl('')
    })
  }


  ngOnInit(): void {
    this.getArtworks(0)
    this.searchForm.controls['query'].valueChanges.subscribe(value => {
      this.getArtworks(0);
    })
  }
  pageVariablesChanged(x: any) {
    console.log(x)
    const startPage = x.pageIndex;
    this.pageSize = x.pageSize;
    this.getArtworks(startPage);
  }
  getArtworks(startPage: number) :any{
    const content = this.searchForm.get('query')?.value;
    this.paginatorArtworkList = this.artworkService.getProducts(this.pageSize, startPage, content).subscribe((response: any) => {
      this.paginatorArtworkList = response.data;
      console.log(this.paginatorArtworkList)
      this.paginator.pageIndex = startPage;
      this.paginator.pageSize = this.pageSize;
      
      this.total_length = response.pagination.total;
      console.log('Hello');
      this.artworkService.load=true;
    })
  }
  isFavorite(item: any) {
    const index = this.favouriteService.favourites.findIndex((favItem) => {
      favItem.id === item.id;
    })

    return index;
  }
  toggleFavorite(item: any) {
    console.log('hello')
    let isPresent = this.favouriteService.favourites.findIndex(e => e.id == item.id)

    if (isPresent == -1) {
      this.favouriteService.addFavourite(item)
    }
    else {
      this.favouriteService.favourites.splice(isPresent, 1)
    }
  }
}
