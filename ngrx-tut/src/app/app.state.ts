import { Tutorial } from './models/tutorial.modle';

export interface AppState {
  // define the tutorial as an immutable object of type 'Tutorial'
  readonly tutorial: Tutorial[];
}
