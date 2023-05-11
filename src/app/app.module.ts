import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { Empresa1Component } from './page/empresa1/empresa1.component';
import { Empresa2Component } from './page/empresa2/empresa2.component';
import { Empresa3Component } from './page/empresa3/empresa3.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { AllMediaComponent } from './page/media/components/allMedia/allMedia.component';
import { RecentComponent } from './page/media/components/recent/recent.component';
import { AllUsersComponent } from './page/users/components/allUsers/allUsers.component';
import { SubscribedComponent } from './page/users/components/subscribed/subscribed.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Empresa1Component,
    Empresa2Component,
    Empresa3Component,
    AllMediaComponent,
    RecentComponent,
    AllUsersComponent,
    SubscribedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
