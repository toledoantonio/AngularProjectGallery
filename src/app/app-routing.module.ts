import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'windriver', loadChildren: () => import('./page/windriver/windriver.module').then(m => m.WindriverModule) },
  { path: 'naranjax', loadChildren: () => import('./page/naranjax/naranjax.module').then(m => m.NaranjaxModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
