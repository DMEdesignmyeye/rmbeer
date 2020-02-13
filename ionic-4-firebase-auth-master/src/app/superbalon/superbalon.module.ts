import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperbalonPageRoutingModule } from './superbalon-routing.module';

import { SuperbalonPage } from './superbalon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperbalonPageRoutingModule
  ],
  declarations: [SuperbalonPage]
})
export class SuperbalonPageModule {}
