export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  place_of_origin: string;
  date_display: string;
  thumbnail: {
    lqip: string;
    url: string;
    alt_text: string;
    widths: number[];
  }
}