import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiounoPageRoutingModule } from './beneficiouno-routing.module';

import { BeneficiounoPage } from './beneficiouno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiounoPageRoutingModule
  ],
  declarations: [BeneficiounoPage]
})
export class BeneficiounoPageModule {}
