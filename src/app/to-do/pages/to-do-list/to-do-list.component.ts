import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginState } from '../../states/login.reducer';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  usuario$: Observable<LoginState>;
  user = '';
  toDoList: string[] = [];
  inputToDo  = new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)])


  constructor(
    private store: Store<{ user: LoginState }>
    ) {
    this.usuario$ = this.store.select('user');
  }

  ngOnInit(): void {
    this.usuario$.subscribe(res => {console.log(res); this.user = res.user})
  }

  addToDo(){
    this.toDoList.push(this.inputToDo.value);
    this.inputToDo.setValue('');
  }

  deleteToDo(index: number) {
    console.log(index)
    this.toDoList.splice(index, 1);
  }

}
