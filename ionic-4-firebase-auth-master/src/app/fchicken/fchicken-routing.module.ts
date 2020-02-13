import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FchickenPage } from './fchicken.page';

const routes: Routes = [
  {
    path: '',
    component: FchickenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FchickenPageRoutingModule {}
