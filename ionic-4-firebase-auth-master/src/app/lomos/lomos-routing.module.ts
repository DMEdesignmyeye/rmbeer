import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LomosPage } from './lomos.page';

const routes: Routes = [
  {
    path: '',
    component: LomosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LomosPageRoutingModule {}
