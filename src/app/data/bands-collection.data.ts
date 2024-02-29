import { Band } from '../models/band.model';

const BANDS_COLLECTION: Band[] = [
  {
    id: 1,
    img: 'https://phantom-marca-mx.unidadeditorial.es/1a487a84bad0038297017a114a850e46/resize/828/f/jpg/mx/assets/multimedia/imagenes/2023/02/24/16772440063811.jpg',
    name: 'BTS',
    codeName: 'bts',
    albums: [
      {
        id: 1,
        name: 'Album1',
        img: 'https://cdnx.jumpseller.com/tienda-humo/image/8454049/resize/635/635?1649705159',
      },
    ],
    members: []
  },
  {
    id: 2,
    img: 'https://www.mondosonoro.com/wp-content/uploads/2023/02/ateez2.png',
    name: 'Ateez',
    codeName: 'ateez',
    albums: [
      {
        id: 2,
        name: 'Album2',
        img: 'https://lastfm.freetls.fastly.net/i/u/300x300/cbb4b745cffd3f3f655b1bd7a01cea9f.jpg'
      },
    ],
    members: []
  },
  {
    id: 3,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/200209_%EC%96%91%EC%B2%9C_%ED%8C%AC%EC%82%AC%EC%9D%B8%ED%9A%8C.jpg/800px-200209_%EC%96%91%EC%B2%9C_%ED%8C%AC%EC%82%AC%EC%9D%B8%ED%9A%8C.jpg',
    name: 'G-friend',
    codeName: 'g-friend',
    albums: [
      {
        id: 3,
        name: 'Album3',
        img: 'https://lastfm.freetls.fastly.net/i/u/300x300/cbb4b745cffd3f3f655b1bd7a01cea9f.jpg'
      },
    ],
    members: []
  },
  {
    id: 4,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/THE_BOYZ_%E2%80%98BE_AWARE%E2%80%99_Showcase_230220.jpg/1200px-THE_BOYZ_%E2%80%98BE_AWARE%E2%80%99_Showcase_230220.jpg',
    name: 'THE BOYZ',
    codeName: 'the-boyz',
    albums: [
      {
        id: 4,
        name: 'Album4',
        img: 'https://lastfm.freetls.fastly.net/i/u/300x300/cbb4b745cffd3f3f655b1bd7a01cea9f.jpg'
      },
    ],
    members: []
  },
];

export default BANDS_COLLECTION;