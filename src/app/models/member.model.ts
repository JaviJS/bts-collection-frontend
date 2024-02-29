import { Album } from "./album.model";
export interface Member {
    id?: number;
    stage_name: string;
    name: string;
    birth_day: dateFns;
    album?: Album[]
  }