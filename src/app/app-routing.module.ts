import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'allMedia', loadChildren: () => import('./page/media/media.module').then(m => m.MediaModule) },
{ path: 'recent', loadChildren: () => import('./page/media/media.module').then(m => m.MediaModule) },
{ path: 'allUsers', loadChildren: () => import('./page/users/users.module').then(m => m.UsersModule) },
{ path: 'subscribed', loadChildren: () => import('./page/users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
