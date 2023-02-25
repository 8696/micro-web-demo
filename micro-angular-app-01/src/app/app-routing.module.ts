import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about.component';
import { HomeComponent } from './page/home.component';
import { E404Component } from './page/404.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '404',
    component: E404Component
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  }
];

declare const window: { __POWERED_BY_QIANKUN__: boolean; }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/micro-angular-app-01' : '/' }]
})
export class AppRoutingModule { }
