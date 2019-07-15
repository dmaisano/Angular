import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MOVIES, Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }
}
