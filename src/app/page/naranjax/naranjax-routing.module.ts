import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project1NComponent } from './components/project1N/project1N.component';
import { Project2NComponent } from './components/project2N/project2N.component';

const routes: Routes = [
  { path: 'project1N', component: Project1NComponent },
  { path: 'project2N', component: Project2NComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NaranjaxRoutingModule { }