import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../shared/models/tutorial.model';
import { Store, Select } from '@ngxs/store';
import { RemoveTutorial } from '../shared/actions/tutorial.actions';
import { TutorialState } from '../shared/state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  // tutorials$: Observable<Tutorial[]>;
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store) {
    // this.tutorials$ = this.store.select((state) => state.tutorials.tutorials);
  }

  ngOnInit() {}

  deleteTutorial(name: string) {
    this.store.dispatch(new RemoveTutorial(name));
  }
}
