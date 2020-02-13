import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocteleriaPageRoutingModule } from './cocteleria-routing.module';

import { CocteleriaPage } from './cocteleria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocteleriaPageRoutingModule
  ],
  declarations: [CocteleriaPage]
})
export class CocteleriaPageModule {}
