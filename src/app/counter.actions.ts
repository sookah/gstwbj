import { createAction } from '@ngrx/store';

export const increment = createAction('[Conter component] Increment');
export const decrement = createAction('[Counter component] Decrement');
export const reset = createAction('[Counter component] Reset');
