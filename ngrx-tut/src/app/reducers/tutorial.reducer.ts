// import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.modle';
import * as TutorialActions from './../actions/tutorial.actions';

const initialState: Tutorial = {
  title: 'Initial Tutorial',
  url: 'http://google.com'
};

export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}
