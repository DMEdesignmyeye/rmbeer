import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FajitasPageRoutingModule } from './fajitas-routing.module';

import { FajitasPage } from './fajitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FajitasPageRoutingModule
  ],
  declarations: [FajitasPage]
})
export class FajitasPageModule {}
