import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParrillaPageRoutingModule } from './parrilla-routing.module';

import { ParrillaPage } from './parrilla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParrillaPageRoutingModule
  ],
  declarations: [ParrillaPage]
})
export class ParrillaPageModule {}
