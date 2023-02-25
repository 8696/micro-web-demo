import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './page/about.component';
import { HomeComponent } from './page/home.component';
import { E404Component } from './page/404.component';

@NgModule({
  declarations: [
    AppComponent, AboutComponent, HomeComponent, E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
