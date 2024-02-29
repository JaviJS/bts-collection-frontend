import { Album } from "./album.model";
import { Member } from "./member.model";
export interface Band {
    id?: number;
    img: string;
    name: string;
    codeName:string;
    alias?: string;
    description?: string;
    debut_date? : Date;
    albums: Album[],
    members: Member[]
  }