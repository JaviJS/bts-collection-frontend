import { Album } from "./album.model";
import { Member } from "./member.model";
export interface Band {
    id?: number;
    img: string;
    name: string;
    complete_name?: string;
    code_name: string;
    description?: string;
    debut_date? : Date;
    mv_debut: string;
    albums: Album[],
    members: Member[]
  }