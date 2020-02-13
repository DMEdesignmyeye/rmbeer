import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrscannPageRoutingModule } from './qrscann-routing.module';

import { QrscannPage } from './qrscann.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrscannPageRoutingModule
  ],
  declarations: [QrscannPage]
})
export class QrscannPageModule {}
