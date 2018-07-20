import { AppState } from './../app.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.modle';
import * as TutorialActions from './../actions/tutorial.actions';
import swal from 'sweetalert';

@Component({
  selector: 'ngrx-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  title = '';
  url = '';

  constructor(private store: Store<AppState>) {}

  addTutorial(): void {
    if (this.title === '' || this.url === '') {
      let msg: string;

      if (this.title === '' && this.url === '') {
        msg = 'Please enter a name and url for the tutorial';
      } else if (this.title === '') {
        msg = 'Please enter a title for the tutorial';
      } else if (this.url === '') {
        msg = 'Please enter a url for the tutorial';
      }

      swal(msg, '', 'warning');
      return;
    }

    this.store.dispatch(
      new TutorialActions.AddTutorial({ title: this.title, url: this.url })
    );

    this.title = '';
    this.url = '';
  }

  ngOnInit() {}
}
