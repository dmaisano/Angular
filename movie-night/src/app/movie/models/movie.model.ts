export interface Movie {
  id: number;
  name: string;
  genre: string;
  image: string;
  releaseYear: string;
}

export const MOVIES: Movie[] = [
  {
    id: 1,
    name: 'The Terminator',
    genre: 'Sci-fi',
    image: 'https://m.media-amazon.com/images/I/718hsW0TlmL._AC_UL436_.jpg',
    releaseYear: '1984',
  },
  {
    id: 2,
    name: 'The Terminator',
    genre: 'Sci-fi',
    image: 'https://m.media-amazon.com/images/I/718hsW0TlmL._AC_UL436_.jpg',
    releaseYear: '1984',
  },
];
