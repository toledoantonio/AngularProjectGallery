import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { Empresa1Component } from './page/empresa1/empresa1.component';
import { Empresa2Component } from './page/empresa2/empresa2.component';
import { Empresa3Component } from './page/empresa3/empresa3.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Empresa1Component,
    Empresa2Component,
    Empresa3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
