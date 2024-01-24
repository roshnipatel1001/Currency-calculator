import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as userActions from './actions';
import { AppService } from './services/app.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private appService: AppService) {}

  userSignup$ = createEffect(() =>
    this.actions$.pipe(
      exhaustMap((action) =>
        this.appService.getProducts().pipe(
          map((response) => userActions.apiSuccess(response)),
          catchError((error: any) => of(userActions.apiFailure(error)))
        )
      )
    )
  );
}
