import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  template: `
  <div style="background: #B6F7C1; padding: 2rem;">
    <h1>Child Component</h1>
    <p>code: {{ code }}</p>

    <input style="margin: 1rem 0 2rem 0;" [(ngModel)]="newCode" placeholder="Enter new code">
    <button (click)="changeCode(newCode)">change code</button>
    <p style="font-size: 1rem;">changing the code in the child component will also affect the parent</p>
  </div>
  `,
  styles: [],
})
export class ChildComponent implements OnInit {
  code: string;
  newCode: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getCode().subscribe(code => (this.code = code));
  }

  changeCode(newCode: string) {
    this.data.setCode(newCode);
  }
}
