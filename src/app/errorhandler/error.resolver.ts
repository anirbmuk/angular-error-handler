import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { ErrorService } from './../services/error.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorResolver
  implements Resolve<{ code: string; message: string } | null>
{
  constructor(
    private readonly errorService: ErrorService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.errorService.error$.pipe(
      take(1),
      tap((data) => {
        if (!data) {
          throw new Error('No error');
        }
      }),
      catchError(() => {
        this.router.navigate(['/']);
        return of(null);
      })
    );
  }
}
