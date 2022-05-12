import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginState } from '../../states/login.reducer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<LoginState> = new EventEmitter();
  loginForm = this.fb.group({
    user: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  login() {
    const form = this.loginForm.value as LoginState;
    this.onSubmit.emit(form)
  }

}
