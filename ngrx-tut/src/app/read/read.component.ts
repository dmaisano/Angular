import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.modle';
import { Store } from '@ngrx/store';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'ngrx-read',
  templateUrl: './read.component.html'
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials$ = store.select('tutorial');
  }

  ngOnInit() {}

  deleteTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}
