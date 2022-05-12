import { createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';
 
export interface AppState {
  user: LoginState;
}
 
export const selectFeature = (state: AppState) => state.user;
 
export const selectLoggin = createSelector(
  selectFeature,
  (state: LoginState) => state.login
);