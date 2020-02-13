import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LomosPageRoutingModule } from './lomos-routing.module';

import { LomosPage } from './lomos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LomosPageRoutingModule
  ],
  declarations: [LomosPage]
})
export class LomosPageModule {}
