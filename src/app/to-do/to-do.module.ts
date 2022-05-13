import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { ComponentsModule } from './components/components.module';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './states/login.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoGuard } from './guards/to-do.guard';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    LoginComponent,
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    ComponentsModule,
    StoreModule.forRoot({
      user: loginReducer
    }, {})
  ],
  providers: [
    ToDoGuard // HERE
  ]
})
export class ToDoModule {}
