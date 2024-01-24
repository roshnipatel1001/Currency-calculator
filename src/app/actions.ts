import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const API_SUCCESS = '[Product Page] Api Success';
export const API_FAILURE = '[Product Page] Api Failure';

export const apiSuccess = createAction(API_SUCCESS, props<any>());

export const apiFailure = createAction(
  API_FAILURE,
  props<{ message: string }>()
);
