import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../state/app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.tutorials$ = this.store.select('tutorial');

    this.store.select('tutorial').subscribe((data) => {
      console.log(data);
    });
  }

  deleteTutorial(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
}
