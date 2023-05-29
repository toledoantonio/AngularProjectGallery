import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaranjaxRoutingModule } from './naranjax-routing.module';
import { Project1NComponent } from './components/project1N/project1N.component';
import { Project2NComponent } from './components/project2N/project2N.component';


@NgModule({
  declarations: [
    Project1NComponent,
    Project2NComponent
  ],
  imports: [
    CommonModule,
    NaranjaxRoutingModule
  ]
})
export class NaranjaxModule { }
