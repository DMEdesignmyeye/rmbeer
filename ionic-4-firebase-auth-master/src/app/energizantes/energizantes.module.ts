import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnergizantesPageRoutingModule } from './energizantes-routing.module';

import { EnergizantesPage } from './energizantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnergizantesPageRoutingModule
  ],
  declarations: [EnergizantesPage]
})
export class EnergizantesPageModule {}
