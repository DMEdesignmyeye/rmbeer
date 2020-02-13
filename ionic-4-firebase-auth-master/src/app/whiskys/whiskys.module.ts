import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhiskysPageRoutingModule } from './whiskys-routing.module';

import { WhiskysPage } from './whiskys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhiskysPageRoutingModule
  ],
  declarations: [WhiskysPage]
})
export class WhiskysPageModule {}
