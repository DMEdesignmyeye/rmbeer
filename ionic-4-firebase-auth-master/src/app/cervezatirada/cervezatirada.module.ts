import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CervezatiradaPageRoutingModule } from './cervezatirada-routing.module';

import { CervezatiradaPage } from './cervezatirada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CervezatiradaPageRoutingModule
  ],
  declarations: [CervezatiradaPage]
})
export class CervezatiradaPageModule {}
