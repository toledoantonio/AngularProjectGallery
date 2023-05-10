import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { AllComponent } from './components/all/all.component';
import { RecentComponent } from './components/recent/recent.component';


@NgModule({
  declarations: [
    AllComponent,
    RecentComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
