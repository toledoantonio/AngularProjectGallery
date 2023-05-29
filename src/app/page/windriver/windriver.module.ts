import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindriverRoutingModule } from './windriver-routing.module';
import { Project1WComponent } from './components/project1W/project1W.component';
import { Project2WComponent } from './components/project2W/project2W.component';


@NgModule({
  declarations: [
    Project1WComponent,
    Project2WComponent
  ],
  imports: [
    CommonModule,
    WindriverRoutingModule
  ]
})
export class WindriverModule { }
