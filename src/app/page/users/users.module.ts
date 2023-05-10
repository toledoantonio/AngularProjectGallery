import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllUsersComponent } from './components/allUsers/allUsers.component';
import { SubscribedComponent } from './components/subscribed/subscribed.component';


@NgModule({
  declarations: [
    AllUsersComponent,
    SubscribedComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
