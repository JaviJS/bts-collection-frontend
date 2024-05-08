import { Band } from '../models/band.model';
import { TypeAlbumDict } from '../models/typeAlbum.model';

const TYPES_ALBUM: TypeAlbumDict = {
  'DS': {
    id: 1,
    name: 'Digital Single',
  },
  'MA': {
    id: 2,
    name: 'Mini Album',
  },
  'MT': {
    id: 3,
    name: 'MixTapes',
  },
  'DO': {
    id: 4,
    name: 'Drama OST',
  },
};

const BANDS_COLLECTION: Band[] = [
  {
    id: 1,
    img: 'https://phantom-marca-mx.unidadeditorial.es/1a487a84bad0038297017a114a850e46/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/02/24/16772440063811.jpg',
    name: 'BTS',
    complete_name: 'Bangtan Soyeondan',
    code_name: 'bts',
    debut_date: new Date('11-06-2013'),
    mv_debut:
      'https://www.youtube.com/watch?v=rBG5L7UsUxA&ab_channel=HYBELABELS',
    albums: [
      {
        id: 1,
        name: '2 COOL 4 SKOOL',
        img: 'https://cdnx.jumpseller.com/tienda-humo/image/8454049/resize/635/635?1649705159',
        released_date: new Date('12-06-2013'),
        type_album: TYPES_ALBUM['DS'],
        title_song: 'No More Dream',
        duration: '18:45',
        total_song: 9,
        songs: [
          { id: 1, name: 'Intro: 2 Cool 4 Skool (feat. DJ Friz)', position: 1 },
          { id: 2, name: 'We Are Bulletproof Pt.2', position: 2 },
          { id: 3, name: 'Skit: Circle Room Talk', position: 3 },
          { id: 4, name: 'No More Dream', position: 4 },
          { id: 5, name: 'Interlude', position: 5 },
          { id: 6, name: 'I Like It', position: 6 },
          { id: 7, name: 'Outro: Circle Room Cypher', position: 7 },
          { id: 8, name: 'Skit: On the Start Line', position: 8 },
          { id: 9, name: 'Path', position: 9 }
        ],
      },
      {
        id: 2,
        name: 'O!RUL8,2?',
        img: 'https://cdnx.jumpseller.com/tienda-humo/image/8454049/resize/635/635?1649705159',
        released_date: new Date('12-09-2013'),
        type_album: TYPES_ALBUM['MA'],
        title_song: 'N.O',
        duration: '30:16',
        total_song: 10,
        songs: [
          { id: 1, name: 'Intro: 2 Cool 4 Skool (feat. DJ Friz)', position: 1 },
          { id: 2, name: 'We Are Bulletproof Pt.2', position: 2 },
          { id: 3, name: 'Skit: Circle Room Talk', position: 3 },
          { id: 4, name: 'No More Dream', position: 4 },
          { id: 5, name: 'Interlude', position: 5 },
          { id: 6, name: 'I Like It', position: 6 },
          { id: 7, name: 'Outro: Circle Room Cypher', position: 7 },
          { id: 8, name: 'Skit: On the Start Line', position: 8 },
          { id: 9, name: 'Path', position: 9 }
        ],
      },
    ],
    members: [],
  },
];

export default BANDS_COLLECTION;
