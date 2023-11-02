import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  currentArt:any;
  constructor(private activeRoute: ActivatedRoute,private artworkservice:ArtsService){}  
  ngOnInit() {
    this.activeRoute.params.subscribe((params)=>{
      let artworkId = params['id'];
      console.log(params['id']);
      this.currentArt=this.artworkservice.getDetails(artworkId).subscribe((response:any)=>{
        this.currentArt=response.data;
        console.log(this.currentArt.description)
      })
    })
  }
}
