import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addTutorial(name: string, url: string) {
    console.log({
      name,
      url,
    });

    this.store.dispatch(new TutorialActions.AddTutorial({ name, url }));
  }

  foo(name, url) {
    console.log({
      name,
      url,
    });
  }
}
