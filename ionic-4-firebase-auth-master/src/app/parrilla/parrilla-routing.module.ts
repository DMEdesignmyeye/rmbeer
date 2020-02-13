import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParrillaPage } from './parrilla.page';

const routes: Routes = [
  {
    path: '',
    component: ParrillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParrillaPageRoutingModule {}
