import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllComponent } from './components/all/all.component';
import { SubscribedComponent } from './components/subscribed/subscribed.component';


@NgModule({
  declarations: [
    AllComponent,
    SubscribedComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
