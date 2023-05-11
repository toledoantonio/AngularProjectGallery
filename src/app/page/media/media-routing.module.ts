import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMediaComponent } from './components/allMedia/allMedia.component';
import { RecentComponent } from './components/recent/recent.component';

const routes: Routes = [
  { path: 'allMedia', component: AllMediaComponent },
  { path: 'recent', component: RecentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MediaRoutingModule { }