import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private code = new BehaviorSubject<string>('00');
  protected currentCode = this.code.asObservable();

  constructor() {}

  setCode(code: string): void {
    this.code.next(code);
  }

  getCode(): Observable<string> {
    return this.currentCode;
  }
}
