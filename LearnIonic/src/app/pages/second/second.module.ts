import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SecondPage } from './second.page';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: SecondPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../tab1/tab1.module#Tab1PageModule',
      },
      {
        path: 'tab2',
        loadChildren: '../tab2/tab2.module#Tab2PageModule',
      },
    ],
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
  declarations: [SecondPage],
})
export class SecondPageModule {}
