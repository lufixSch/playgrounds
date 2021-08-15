import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../first/first.module#FirstPageModule',
      },
      {
        path: 'second',
        loadChildren: '../second/second.module#SecondPageModule',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/menu/first',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderModule,
  ],
  declarations: [MenuPage],
})
export class MenuPageModule {}
