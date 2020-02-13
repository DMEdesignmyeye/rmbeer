import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspirituososPage } from './espirituosos.page';

const routes: Routes = [
  {
    path: '',
    component: EspirituososPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspirituososPageRoutingModule {}
