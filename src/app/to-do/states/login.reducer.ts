import { Action, createReducer, on } from '@ngrx/store';
import { LoginAction } from './login.actions';

export interface LoginState {
  user: string,
  password: string,
  login?: boolean
}

export const initialState: LoginState = {
  user: '',
  password: '',
  login: false
};

export function loginReducer(state: LoginState, action: LoginAction) {
  return {
    ...state,
    ...action.payload
  }
}