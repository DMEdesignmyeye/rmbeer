import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RkidsPage } from './rkids.page';

const routes: Routes = [
  {
    path: '',
    component: RkidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RkidsPageRoutingModule {}
