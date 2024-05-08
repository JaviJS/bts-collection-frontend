import { TypeAlbum } from './typeAlbum.model';
import { Song } from './song.model';
export interface Album {
  id?: number;
  name: string;
  img: string;
  type_album: TypeAlbum;
  title_song?: string;
  duration: string;
  total_song: number;
  released_date: Date;
  songs?: Song[];
}
