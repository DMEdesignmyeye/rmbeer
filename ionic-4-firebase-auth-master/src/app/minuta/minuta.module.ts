import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinutaPageRoutingModule } from './minuta-routing.module';

import { MinutaPage } from './minuta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinutaPageRoutingModule
  ],
  declarations: [MinutaPage]
})
export class MinutaPageModule {}
