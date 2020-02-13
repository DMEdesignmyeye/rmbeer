import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RabasPage } from './rabas.page';

const routes: Routes = [
  {
    path: '',
    component: RabasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RabasPageRoutingModule {}
