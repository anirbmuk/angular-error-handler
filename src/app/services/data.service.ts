import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private buttonActionSubject = new BehaviorSubject<string | undefined>(
    undefined
  );
  private buttonAction$ = this.buttonActionSubject.asObservable();

  value$ = this.buttonAction$.pipe(
    exhaustMap((id) => {
      if (!id) {
        return EMPTY;
      }
      return this.http.get<{ id: number; text: string }>(
        `http://localhost:3000/todos/${id}`
      );
    })
  );

  constructor(private readonly http: HttpClient) {}

  clickBtn(value: string) {
    this.buttonActionSubject.next(value);
  }
}
