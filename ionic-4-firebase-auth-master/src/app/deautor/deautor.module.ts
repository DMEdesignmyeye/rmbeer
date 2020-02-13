import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeautorPageRoutingModule } from './deautor-routing.module';

import { DeautorPage } from './deautor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeautorPageRoutingModule
  ],
  declarations: [DeautorPage]
})
export class DeautorPageModule {}
