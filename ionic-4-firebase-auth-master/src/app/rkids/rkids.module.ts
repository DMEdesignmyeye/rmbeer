import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RkidsPageRoutingModule } from './rkids-routing.module';

import { RkidsPage } from './rkids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RkidsPageRoutingModule
  ],
  declarations: [RkidsPage]
})
export class RkidsPageModule {}
