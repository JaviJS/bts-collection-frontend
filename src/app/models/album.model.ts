export interface Album {
    id?: number;
    name: string;
    img: string;
    songs?: Album[]
  }