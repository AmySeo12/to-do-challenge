import { Component, OnInit } from '@angular/core';
import { LoginState } from '../../states/login.reducer';
import { Store } from '@ngrx/store';
import { UserLogin } from '../../states/login.actions';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<{ user: LoginState }>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: LoginState) {
    console.log(form);
    const data = {
      ...form,
      login: true
    }
    this.store.dispatch(new UserLogin(data));
    this.router.navigate(['/to-do'])
  }

}
