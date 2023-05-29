import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project1WComponent } from './components/project1W/project1W.component';
import { Project2WComponent } from './components/project2W/project2W.component';

const routes: Routes = [
  { path: 'project1W', component: Project1WComponent },
  { path: 'project2W', component: Project2WComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WindriverRoutingModule { }