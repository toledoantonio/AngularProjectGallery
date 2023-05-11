import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './components/allUsers/allUsers.component';
import { SubscribedComponent } from './components/subscribed/subscribed.component';

const routes: Routes = [
  { path: 'allUsers', component: AllUsersComponent },
  { path: 'subscribed', component: SubscribedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }