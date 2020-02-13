import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspumantesPage } from './espumantes.page';

const routes: Routes = [
  {
    path: '',
    component: EspumantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspumantesPageRoutingModule {}
