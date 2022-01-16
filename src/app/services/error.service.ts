import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorSubject = new BehaviorSubject<{
    code: string;
    message: string;
  } | null>(null);
  error$ = this.errorSubject.asObservable();

  addError(error: { code: string; message: string }): void {
    if (error) {
      this.errorSubject.next(error);
    }
  }
}
