import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspumantesPageRoutingModule } from './espumantes-routing.module';

import { EspumantesPage } from './espumantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspumantesPageRoutingModule
  ],
  declarations: [EspumantesPage]
})
export class EspumantesPageModule {}
