import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsaborPageRoutingModule } from './csabor-routing.module';

import { CsaborPage } from './csabor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsaborPageRoutingModule
  ],
  declarations: [CsaborPage]
})
export class CsaborPageModule {}
