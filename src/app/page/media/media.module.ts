import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { AllMediaComponent } from './components/allMedia/allMedia.component';
import { RecentComponent } from './components/recent/recent.component';


@NgModule({
  declarations: [
    AllMediaComponent,
    RecentComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
