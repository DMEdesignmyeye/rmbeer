import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandwichsPageRoutingModule } from './sandwichs-routing.module';

import { SandwichsPage } from './sandwichs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandwichsPageRoutingModule
  ],
  declarations: [SandwichsPage]
})
export class SandwichsPageModule {}
