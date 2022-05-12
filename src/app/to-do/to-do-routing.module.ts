import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoGuard } from './guards/to-do.guard';
import { LoginComponent } from './pages/login/login.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'to-do',
    canActivate: [ToDoGuard],
    component: ToDoListComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
