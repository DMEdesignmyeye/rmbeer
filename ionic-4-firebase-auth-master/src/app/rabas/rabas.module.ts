import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RabasPageRoutingModule } from './rabas-routing.module';

import { RabasPage } from './rabas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RabasPageRoutingModule
  ],
  declarations: [RabasPage]
})
export class RabasPageModule {}
