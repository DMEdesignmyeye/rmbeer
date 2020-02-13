import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GintonicPage } from './gintonic.page';

const routes: Routes = [
  {
    path: '',
    component: GintonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GintonicPageRoutingModule {}
