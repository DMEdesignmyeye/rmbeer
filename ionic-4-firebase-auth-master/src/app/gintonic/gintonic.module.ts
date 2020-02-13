import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GintonicPageRoutingModule } from './gintonic-routing.module';

import { GintonicPage } from './gintonic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GintonicPageRoutingModule
  ],
  declarations: [GintonicPage]
})
export class GintonicPageModule {}
