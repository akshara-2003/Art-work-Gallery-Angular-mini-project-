import { Component, Input, OnInit } from '@angular/core';
interface carouselImage{
  src : string,
  alt :string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  currentSlide = 0;
  slides = [
    {
      image: './assets/bg-1.avif',
      caption: 'Remedios Varo',
      description:'Artist:Katsushika Hokusai 葛飾 北斎 (Japanese, 1760-1849)'
    },
    {
      image: './assets/bg-2.jpg',
      caption: 'Weaving',
      description: 'Artist:Diego Rivera (Mexican, 1886–1957)'
    },
    {
      image: './assets/bg-3.jpg',
      caption: 'The Church of Overschie',
      description: 'Artist:Johan Barthold Jongkind(Dutch, 1819-1891)'
    },
    {
      image: './assets/bg-4.jpg',
      caption: 'Landscape at Chailly',
      description: 'Artist:Frédéric Bazille(French, 1841-1870)'
    },
    {
      image: './assets/bg-5.jpg',
      caption: 'Paris Street; Rainy Day',
      description: 'Artist:Gustave Caillebotte(French, 1848-1894)'
    },
    {
      image: './assets/bg-6.jpg',
      caption: 'Lioness and Cubs',
      description: 'Artist:Antoine Louis Barye(French, 1795-1875)'
    },
  ];

  ngOnInit(): void {
    // Initialization logic goes here
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
