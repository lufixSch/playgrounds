import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirstPage } from './first.page';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: FirstPage,
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
  declarations: [FirstPage],
})
export class FirstPageModule {}
