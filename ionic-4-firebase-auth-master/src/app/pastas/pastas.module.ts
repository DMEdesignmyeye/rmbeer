import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastasPageRoutingModule } from './pastas-routing.module';

import { PastasPage } from './pastas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastasPageRoutingModule
  ],
  declarations: [PastasPage]
})
export class PastasPageModule {}
