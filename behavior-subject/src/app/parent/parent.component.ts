import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  // templateUrl: './parent.component.html',
  template: `
  <div style="background: #0B409C; padding: 2rem;">
    <h1>Parent Component</h1>
    <p>code: {{ code }}</p>
  </div>
  `,
  styles: [],
})
export class ParentComponent implements OnInit {
  code: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getCode().subscribe(code => (this.code = code));
  }
}
