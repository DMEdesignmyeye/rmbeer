import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisilestankPageRoutingModule } from './misilestank-routing.module';

import { MisilestankPage } from './misilestank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisilestankPageRoutingModule
  ],
  declarations: [MisilestankPage]
})
export class MisilestankPageModule {}
