import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspirituososPageRoutingModule } from './espirituosos-routing.module';

import { EspirituososPage } from './espirituosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspirituososPageRoutingModule
  ],
  declarations: [EspirituososPage]
})
export class EspirituososPageModule {}
