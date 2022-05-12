import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginState } from '../states/login.reducer';
import { tap } from "rxjs/internal/operators/tap";
import { selectLoggin } from '../states/login.selector';

@Injectable({
  providedIn: 'root'
})
export class ToDoGuard implements CanActivate {

  constructor(
    private store: Store<{ user: LoginState }>,
    private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.store.pipe(
          select(selectLoggin),
          tap(isLogged => {
            console.log(isLogged)
              if (!isLogged) {
                  this.route.navigateByUrl('/login')
              }
          })
      )
  }
}
