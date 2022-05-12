import { Action } from '@ngrx/store';
import { LoginState } from './login.reducer';

export enum LoginActionTypes {
  LOGIN = '[Login Component] Login'
}

export class UserLogin implements Action {
  readonly type = LoginActionTypes.LOGIN;
  constructor(public payload: LoginState) {}
}

export type LoginAction = UserLogin;
